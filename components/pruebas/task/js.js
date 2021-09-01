

document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    e.preventDefault();
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  
  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('task');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();

// https://www.youtube.com/watch?v=a8CUEopWCN0  factorizacion
// https://youtu.be/athYuPXPkeY todos los casos de factorizacion




// seraphine

// ganplan velocidad de ataque al tirar la q ademas de contar como
// disparo de largo alcance

// mayor dano en la q de zed

//la younmu vale 100 piesas menos y da velocidad de habilidad

//nueva pasiva de lucian

//disminuye la curacion de la q de irelia

//sobre la marcha para curarse ahora debe ser mayormente a campeones

