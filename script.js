const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
const addButton = document.getElementById('add-button');

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false );

// Call the addTask function when the "Add" button is clicked
addButton.addEventListener('click', addTask);

// Call the addTask function when the "Enter" key is pressed
inputBox.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) { // Check if the key code is for "Enter" key (keyCode 13)
    event.preventDefault(); // Prevent the default form submission behavior
    addTask(); // Call the addTask function
    saveData();
  }
});

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

