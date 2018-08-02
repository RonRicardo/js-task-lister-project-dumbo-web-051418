document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const newListForm = document.getElementById('create-list-form')
  const listDiv = document.getElementById("app-content");
  const newListTitle = document.getElementById('new-list-title')
  const listCollection = [];

  //create new list item
  const addListDiv = () => {
    let newDiv = document.createElement('div');
    newDiv.id = 'lists';
    listDiv.appendChild(newDiv);
    return newDiv; // this is the div i'm appending lists to, so i'm returning it
  }

  const addTaskForm = () => {
    let newTaskForm = document.createElement('form');
    newTaskForm.id = 'create-task-form';
    newTaskForm.innerHTML =
    `<form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>`
    listDiv.appendChild(newTaskForm)
  }

  //actually, let's handle the form first
  const createList = (newListForm) => {
    newListForm.preventDefault();
    let createListTitle = newListTitle.value;
    let taskForm = document.querySelector('#create-task-form')
      if (taskForm === null){
        addTaskForm();
        //handle event listeners for task form
      }
    const newDiv = addListDiv();
    addListToPage(newDiv, createListTitle);
  }

  const deleteList = (event) => {
    if (event.target.id === 'delete-task'){
     event.target.parentNode.parentNode.remove()
     //i know that's messy but it does it
   }
  }

  const addListToPage = (newDiv, createListTitle) => {
    let newList = document.createElement('div')
    newList.innerHTML = `<h2>${createListTitle}
      <button id="delete-task" class="delete-list">
        X
      </button>
    </h2>`
    newDiv.addEventListener('click', deleteList);
    newDiv.appendChild(newList);
  }


//event listener for one constant element
  newListForm.addEventListener('submit', createList)


});
