function plus(){
    let label =document.getElementById("label")
    count=parseInt(label.innerHTML)
    count=count+1
    label.innerHTML=count
}
function a(){
    alert("a");
}
var a = document.getElementById("a").addEventListener('click',function(){alert("a");})
