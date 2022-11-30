var label=document.getElementById("label");
var count=label.innerHTML;
count=parseInt(count);

document.getElementById("increase").addEventListener('click',function(){
    count++;
    label.innerHTML=count;
})
document.getElementById("decrease")
.addEventListener('click',function(){
    count--;
    label.innerHTML=count;
})
document.getElementById("reset")
.addEventListener('click',function(){
    count=0;
    label.innerHTML=count;
})