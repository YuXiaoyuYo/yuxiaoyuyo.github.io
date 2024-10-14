async function updateViewCount(page, elementId) {
    const response = await fetch(`https://viewcounter.yuxiaoyuyo.workers.dev/api/count?page=${page}`, {
        method: 'POST'
    })
    const count = await response.text();
    document.getElementById(elementId).innerText = count;
}

// 调用函数更新计数并显示最新计数
const page = window.location.pathname;
updateViewCount(page, 'view-count');
