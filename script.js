//selecting button
const ToggleButton =document.getElementById("toggle-mode");
//add EventListener
ToggleButton.addEventListener("click",function(){
document.body.classList.toggle("toggle");//dark theme apply
//button condition checks where return the values in mode.
let mode =document.body.classList.contains("toggle") ? "dark" :"light";
localStorage.getItem("mode",mode);
//change the button
ToggleButton.textContent = mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}
);
if(localStorage.getItem("mode")==="dark"){
    document.body.classList.add("toggle");
    ToggleButton.textContent = "☀️ Light Mode";
}
//selecting input task 
const inputTask = document.getElementById("Task-input");
//selecting button in add task
const addTaskButton = document.getElementById("Add-Task");
//selecting the task list in ordered lists
const taskList = document.getElementById("Task-List");
//adding task
function addTask(){
    if(inputTask.value.trim()==="") return;
    //create a new task
    const li = document.createElement("li");
    li.textContent = inputTask.value;
    //create delete button
    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent="❌";
    taskDeleteButton.classList.add("delete-task");
    //remove task whene cliked button
    taskDeleteButton.addEventListener("click",function(){
      taskList.removeChild(li);
    });
    // Append delete button to task
    li.appendChild(taskDeleteButton);
    taskList.appendChild(li);
    // Clear input field
    inputTask.value = "";
}
// Add task when button is clicked
addTaskButton.addEventListener("click",addTask);
// Allow pressing 'Enter' to add task
inputTask.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        addTask();
    }
});
//selecting the id's in promodo section
const TimerDisplay=document.getElementById("Timer-Display");
const StartButton=document.getElementById("Start");
const PauseButton=document.getElementById("Pause");
const StopButton=document.getElementById("Stop");
const customTimeInput = document.getElementById("custom-time");
const setTimeButton = document.getElementById("set-time");

let Timer;
let isRunning= false;
let TimeLeft = 0;
//update function
function updateDisplay(){
    let minutes = Math.floor(TimeLeft / 60);
    let seconds = TimeLeft % 60;
    TimerDisplay.textContent = `${minutes}:${seconds < 10 ? "0":""}${seconds}`;
}
//start timer function
function startTimer(){
    if(TimeLeft <= 0){
        alert("Please set valid Time First");
        return;
    }
    if(!isRunning){
       isRunning = true;
       Timer = setInterval(() => {
        if(TimeLeft>0){
            TimeLeft--;
            updateDisplay();
        }else{
            clearInterval(Timer);
            isRunning= false;
            alert("Time's Up! Take A Break.");
        }
       }, 1000);
    }
}
//Pause a Timer
function pauseTimer(){
    clearInterval(Timer);
    isRunning = false;
}
//Reset a Timer
function resetTimer(){
    clearInterval(Timer);
    TimeLeft=0;
    updateDisplay();
    isRunning = false;
}
//custom timer set 
function setCustomTime(){
    let userTime = parseInt(customTimeInput.value);
    if(userTime > 0){
        TimeLeft = userTime * 60;
        updateDisplay();
    }else{
        alert("Please enter valid number greater than 0.");
    }
}
    setTimeButton.addEventListener("click",setCustomTime);
    customTimeInput.addEventListener("keypress",function(event){
       if( event.key === "Enter"){
        setCustomTime();
       }
    });

//Attach buttons to Timer
StartButton.addEventListener("click",startTimer);
PauseButton.addEventListener("click",pauseTimer);
StopButton.addEventListener("click",resetTimer);
//initially updated timer
updateDisplay();
