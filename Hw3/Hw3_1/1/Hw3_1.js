let counter = 0; // 計數器的初始值

function updateCounter() {
  const counterElement = document.getElementById('counter');
  counterElement.innerText = counter; // 更新計數器的顯示值
}

document.addEventListener('DOMContentLoaded', function() {
  var button_increase = document.getElementById('increase');
  var button_decrease = document.getElementById('decrease');

  button_increase.addEventListener('click', function() {
    counter++; // 增加計數器的值
    updateCounter(); // 更新顯示值
  });

  button_decrease.addEventListener('click', function() {
    counter--; // 減少計數器的值
    updateCounter(); // 更新顯示值
  });

  updateCounter(); // 初始化時更新計數器的顯示值
});
