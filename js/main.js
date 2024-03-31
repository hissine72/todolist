let valuetask = document.querySelector(".addtask input")
let add = document.querySelector(".addtask span")
let content =document.querySelector(".contenttask")
let notask = document.querySelector(".notask")
let numbertask = document.querySelector(".numbertask .task span")
let comtask = document.querySelector(".numbertask .com span")
console.log(comtask)
 let taskcount = 1;
let completetaskcount=1;




window.onload = function(){
    valuetask.focus();
}
// add.onclick =function(){
//     if(valuetask.value == ""){
//         console.log(valuetask.value)   
//     }
//     else{
//        notask.remove()
//        const task =` <span class="task1">${valuetask.value}
//        <button class= "delete">delete</button>
//    </span> `
//    content.innerHTML+=task;
   
//     }
    
// }
add.addEventListener("click", function()  {
    if(valuetask.value == ""){
        console.log(valuetask.value)   
    }
    else{
       notask.remove()
       const task =` <span class="task1">${valuetask.value}
       <button class= "delete">delete</button>
   </span> `
   content.innerHTML+=task;
   numbertask.textContent = taskcount++;
   
    }
    
}


)

content.addEventListener("click",function(e){
  if(e.target.className == "delete" ){
    e.target.parentElement.remove()
     console.log(e.target.parentElement)
    //  comtask.textContent = completetaskcount++;
  }
  else if(e.target.className == "task1"){
    e.target.classList.add("jh")
    comtask.textContent = completetaskcount++;
    console.log("hellow")
  }

})

