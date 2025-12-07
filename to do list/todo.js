const data = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
    if (data.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const taskContent = data.value.trim();
    
    const listItem = document.createElement('li');
    listItem.textContent = taskContent;
    
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    span.classList.add("close");

    
    span.onclick = function(event) {
        
        event.stopPropagation(); 
        this.parentElement.remove(); 
    };
    listItem.addEventListener('click', function(e) {
        this.classList.toggle('checked');
    });
    listItem.appendChild(span);
    list.appendChild(listItem);
    
    data.value = '';
}