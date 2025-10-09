let add = document.querySelector("#add-btn");
let task = document.querySelector("#task-inp");
let desc = document.querySelector("#desc-inp");
let list = document.querySelector(".task-list");

add.addEventListener("click", function () {
    addTask();
    task.value = ""
    desc.value = ""
});

function addTask() {
  list.innerHTML += `<div class="tasks">
                <h2 id="task-val">${task.value}</h2>
                <p id="task-desc">${desc.value}</p>
            </div>`

}
