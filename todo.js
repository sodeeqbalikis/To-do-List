var enter = document.getElementById("enter")
var btn = document.getElementById("btn")
var nuy = document.getElementById("list")
var mode= document.getElementById("mode")
var darkmode = document.getElementById("dark")
var lightmode = document.getElementById("light")

btn.addEventListener("click", function(){
    if(enter.value.length > 0){
        var todo = document.createElement("h4");
        todo.appendChild(document.createTextNode(enter.value));
        todo.style.border ="1px solid black "
        todo.style.margin="10px"
        nuy.append(todo);
        enter.value="";
    }
});
enter.addEventListener("keypress", function(event){
    if(enter.value.length > 0 && event.which === 13){
        var todo = document.createElement("h4");
        todo.appendChild(document.createTextNode(enter.value));
        todo.style.border = "1px solid black"
        todo.style.margin="10px"
        nuy.append(todo);
        enter.value="";
    }
});
mode.addEventListener("click",function(){
    if(darkmode == `${dark}`){
        body.style.background="black"
        body.style.color="white"
    } else if(lightmode== `${light}`){
        body.style.background="white"
        body.style.color="black"
    }
})
