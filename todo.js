var enter = document.getElementById("enter")
var btn = document.getElementById("btn")
var nuy = document.getElementById("list")

btn.addEventListener("click", function(){
    if(enter.value.length > 0){
        var todo = document.createElement("li");
        todo.appendChild(document.createTextNode(enter.value));
        todo.style.border ="1px solid black "
        nuy.append(todo);
        enter.value="";
    }
});
enter.addEventListener("keypress", function(event){
    if(enter.value.length > 0 && event.which === 13){
        var todo = document.createElement("li");
        todo.appendChild(document.createTextNode(enter.value));
        todo.style.border = "1px solid black"
        nuy.append(todo);
        enter.value="";
    }
});
