const workerUrl = 'https://yu.nm.cn/api/count';

async function getTotalViewCount(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const response = await fetch(workerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action: 'total' })
        });
        const total = await response.text();
        element.innerText = total;
    }
}

// 调用函数获取全站总浏览量并显示（如果存在）
getTotalViewCount('total-view-count');
