function addNewTask(){
  const task = document.querySelector('#new-task').value
  const list = document.querySelector('#list')
  list.innerHTML += (
    `<li>
        <div>
          <input type="checkbox" id="check">
          <p>${task}</p>
        </div>
        
        <button>
          X
        </button>
      </li>`)

}