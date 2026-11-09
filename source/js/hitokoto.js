document.addEventListener("DOMContentLoaded", function() {
    // 一言官方 API，返回纯 JSON
    const apiUrl = 'https://v1.hitokoto.cn/?c=d&c=k'; // c=d 是文学，c=k 是哲学，可自己改

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('网络请求失败');
            return response.json();
        })
        .then(data => {
            const rainbow = document.getElementById('rainbow');
            if (rainbow) {
                // 显示句子和出处
                rainbow.innerText = `${data.hitokoto} —— ${data.from}`;
                // 点击跳转到一言官网查看该句详情
                rainbow.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
            }
        })
        .catch(error => {
            console.error('获取一言失败:', error);
            const rainbow = document.getElementById('rainbow');
            if (rainbow) {
                rainbow.innerText = '获取失败，请刷新重试';
            }
        });
});