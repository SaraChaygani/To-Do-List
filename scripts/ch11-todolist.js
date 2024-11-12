let toDoList = [{
  name: 'Make dinner',
  dueDate: '2022-12-22'
},
{
  name: 'eat lunch',
  dueDate: '2022-12-22'
}];
displayOnDOM();
//display TO DO TO LIST
function displayOnDOM() {
  let listedItems = '';
  for (let i = 0; i < toDoList.length; i++) {
    const todoObj = toDoList[i];
    // const name = todoObj.name;
    // const dueDate = todoObj.dueDate;
    const { name, dueDate } = todoObj;
    listedItems += `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
    toDoList.splice(${i},1);
    displayOnDOM();
    " class='delete-todo-button'>Delete</button>`;
  }
  console.log(listedItems);
  document.querySelector('.js-todo').innerHTML = listedItems;
}


function addToList() {
  const name = document.querySelector('.js-input').value;
  const dueDate = document.querySelector('.js-date-input').value;
  toDoList.push({ name, dueDate });
  displayOnDOM();
  console.log(`added to to do list: ${name} and ${dueDate}`);
  console.log(toDoList);
}

//Onkeydown Function
function onEnter(event) {
  if (event.key === 'Enter') {
    addToList();
  }
}
