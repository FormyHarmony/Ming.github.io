const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

let deleteAllButtonCreated = false; // 初始狀態下尚未創建 "delete_all" 按鈕

function addTodo() {
  const task = todoInput.value.trim(); // 移除空白鍵
  if (task !== '') {
    //創建 div,task=input 放進去
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item'); // CSS樣式
    todoItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    //todoList div(todoItem div(+deleteButton))

    // Add event listener for the delete button
    deleteButton.addEventListener('click', function () {
      todoList.removeChild(todoItem);
      checkDeleteAllButton(); // 刪除待辦事項後檢查是否需要移除 "delete_all" 按鈕
    });

    todoInput.value = '';
  }
  //if button 沒有創建＆todoLis 有東西
  if (!deleteAllButtonCreated && todoList.childElementCount > 0) {
    const deleteAll = document.createElement('button');
    deleteAll.textContent = 'Delete All';
    todoList.appendChild(deleteAll);
    deleteAllButtonCreated = true; // 標記已創建 "delete_all" 按鈕
    deleteAll.addEventListener('click', function () {
      todoList.innerHTML = ''; // 清空待辦事項列表的所有內容
      deleteAllButtonCreated = false; // 重置標記
    });
  }
}

  
// Event listener for the add button
addButton.addEventListener('click', addTodo);

// Event listener for the Enter key press in the input field
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
