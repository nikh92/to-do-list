const input=document.getElementById("inputbox");
const cone=document.getElementById("li-container");
function addtask()
{
    if(input.value==='')
    alert("write something");
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        cone.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
input.value=''
sav();
}
cone.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    e.target.classList.toggle("checked");
    else if(e.target.tagName="span")
     e.target.parentElement.remove();
    sav();
},false);
function sav()
{
    localStorage.setItem("data",cone.innerHTML);
}
function display()
{
    cone.innerHTML=localStorage.getItem("data");
}
display();