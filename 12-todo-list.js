const todoList =JSON.parse(localStorage.getItem('todoList')) ||[];

renderTodoList ();

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo ();
});

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach ((todoObject, index) => {
       const {name,dueDate} = todoObject;
   // destructuring of object, creats a variable of the same name as property and assigns the value.
       const html = `
       <div>${name}</div> 
       <div>${dueDate}</div>
       <button class="delete-button js-delete-button">Delete</button>
       <input type="checkbox">
       `;
   // each display items must be in a element to sperate into a grid pattern in css.
       todoListHTML += html;
       console.log(todoListHTML);
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
      saveToStorage();
    });
  });
}
// the value index exists only with in the function this is called closure.
function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
//  name: name,
//  dueDate: dueDate 
    name,
    dueDate});
// shorthand property of object
  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList ();
  saveToStorage ();
 
}

function saveToStorage () {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}