const inputBox = document.getElementById("input-box");
const listContainter = document.getElementById("list-container");

function addTask(){
if(inputBox.value ==''){
    alert("Morate napisati nešto!");
}
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainter.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputBox.value=="";
}
listContainter.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainter.innerHTML);
}
function showTask(){
    listContainter.innerHTML=localStorage.getItem("data");
}
showTask();