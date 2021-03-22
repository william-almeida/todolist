function idGenerator () {
  const time = new Date()
  const id = 
    time.getDate().toString() +
    time.getHours().toString() +
    time.getMinutes().toString() +
    time.getMilliseconds().toString()

    return id
}

function addNewTask(){
  const taskDescription = document.querySelector('#new-task').value
  const list = document.querySelector('#list')
  const taskId = String(idGenerator())
  console.log(taskId)
  

  list.innerHTML += (
    `<li id="id${taskId}">
        <div>
          <input type="checkbox" id="check">
          <p  >${taskDescription}</p>
        </div>
        
        <button onclick="deleteTask(${taskId})">
          <img src="./src/images/close.png" alt="Deletar">
        </button>
    </li>`)
}

function deleteTask(id){
  console.log (id)
  const test = document.querySelector(`li#id${id}`)
  test.remove()
}
  /*
  ideia: o itemda lista vai ser add com o index
  como id do li 
  */


function runApp (){
  return addNewTask
}