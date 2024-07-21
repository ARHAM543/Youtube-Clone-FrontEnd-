var bars=document.querySelector("#icon1");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

bars.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}