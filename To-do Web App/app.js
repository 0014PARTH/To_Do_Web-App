const todoList = [{
  name:'make juice',
  dueDate: '2025-04-28'},
  {
    name:'make a cake',
    dueDate: '2025-04-29'
  }];

rendertodoList();


function rendertodoList(){

let todoListHTML = '';

for (let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;

  const {name , dueDate} = todoObject;

  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${i}, 1);
    rendertodoList();
  " class= "delete-btn">Delete</button>
 `;
  todoListHTML += html;
}

 document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){
 const inputElement =  document.querySelector('.js-input1');

 const dateInputElement = document.querySelector('.js-due-date-input');

 const dueDate = dateInputElement.value;

 const name = inputElement.value;
  console.log({
   // name: name,
   // dueDate: dueDate
  //  The above line same work as below
  name,
  dueDate
});

todoList.push({
  name,dueDate
});


inputElement.value = '';

rendertodoList();
}

 