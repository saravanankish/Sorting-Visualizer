var rows = document.getElementById("label-row");
var row_slider = document.getElementById("rows");
var create = document.getElementById("create");
var bar_container = document.getElementById("bar-container")
var min = 100;
var max = 10000;
var l = 20;
var arr = [];
generate();

function generate(){
    while(bar_container.hasChildNodes()){
        bar_container.removeChild(bar_container.childNodes[0]);
    }
    arr = CreateArray();
    for (var x in arr){
        var bar = document.createElement("DIV");
        bar.classList.add(x);
        bar.classList.add("bar");
        bar.style.width = bar_container.offsetWidth / l + "px";
        bar.style.height = arr[x] / max * 100 + "%";
        bar_container.appendChild(bar);
    }
}

function CreateArray(){
    var arr = [];
    for(var i = 0; i < l; i++){
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arr;
}


row_slider.oninput = function(){
    rows.innerHTML = "No of rows : " + this.value;
    l = this.value;
    generate();
}