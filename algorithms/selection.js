var speed = 4 * 30;
var speed_slider = document.getElementById("speed");
var btns = document.getElementsByClassName("btn");
var ele = document.getElementsByClassName("bar");
var sli = document.getElementsByClassName("sli");
var no_btn = 4;
var no_slider = 2;

document.getElementById("selection").onclick = function(){
    for(let tt = 0; tt < no_btn; tt++){
        btns[tt].disabled = true;
        btns[tt].classList.add("disabled");
    }
    for(let ttt = 0; ttt < no_slider; ttt++){
        sli[ttt].disabled = true;
    }
    var animate = getSelectionAnimation();
    var sorted = [];
    var sorted_idx = 0;
    console.log(100 - speed - ((4 - Math.floor(150 / arr.length)) * 4));
    for(var i = 0; i < animate.length; i++){
        if(animate[i][0] == 0){
            setTimeout(function(p){
                for(var f in arr){
                    ele[f].style.backgroundColor = "dodgerblue";
                }
                for(var ff in sorted){
                    ele[ff].style.backgroundColor = "green";
                }
                ele[animate[p][1]].style.backgroundColor = "yellow";
                ele[animate[p][2]].style.backgroundColor = "red";
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 4)), i);
        }else if(animate[i][0] == 1){
            setTimeout(function(p){
                for(var f in arr){
                    ele[f].style.backgroundColor = "dodgerblue";
                }
                for(var ff in sorted){
                    ele[ff].style.backgroundColor = "green";
                }
                ele[animate[p][1]].style.backgroundColor = "yellow";
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 4)), i);
        }else if(animate[i][0] == 2){
            setTimeout(function(p){
                for(var f in arr){
                    ele[f].style.backgroundColor = "dodgerblue";
                }
                for(var ff in sorted){
                    ele[ff].style.backgroundColor = "green";
                }
                ele[animate[p][1]].style.backgroundColor = "red";
                ele[animate[p][2]].style.backgroundColor = "red";
                var t = ele[animate[p][1]].style.height;
                ele[animate[p][1]].style.height = ele[animate[p][2]].style.height;
                ele[animate[p][2]].style.height = t;
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 4)), i);
        }else{
            setTimeout(function(p){
                sorted[sorted_idx++] = animate[p][1];
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 4)), i);
        }
    }
    setTimeout(function(){
        for(var f in ele){
            ele[f].style.backgroundColor = "green";
        }
        for(var tt = 0; tt < no_btn; tt++){
            btns[tt].disabled = false;
            btns[tt].classList.remove("disabled");
        }
        for(var ttt = 0; ttt < no_slider; ttt++){
            sli[ttt].disabled = false;
        }
    }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 3)));
}

function getSelectionAnimation(){
    var animation = [];
    var ind = 0;
    for(var i = 0; i < arr.length; i++){
        var min_id = i;
        for(var j = i + 1; j < arr.length; j++){
            animation[ind++] = [0, min_id, j];
            if(arr[j] < arr[min_id]){
                min_id = j;
                animation[ind++] = [1, min_id];
            }
        }
        var t = arr[i];
        arr[i] = arr[min_id];
        arr[min_id] = t;
        animation[ind++] = [2, i, min_id];
        animation[ind++] = [3, i];
    }
    return animation;
}

speed_slider.oninput = function(){
    speed = 4 * this.value;
}