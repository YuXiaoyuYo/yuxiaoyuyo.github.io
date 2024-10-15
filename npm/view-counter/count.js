async function updateViewCount(page, elementId) {
    const response = await fetch(`https://yu.nm.cn/api/count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page })
    });
    const count = await response.text();
    document.getElementById(elementId).innerText = count;
}

// 调用函数更新计数并显示最新计数
const page = window.location.pathname;
updateViewCount(page, 'view-count');
