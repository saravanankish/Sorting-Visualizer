var speed = 30;
var speed_slider = document.getElementById("speed");
var btns = document.getElementsByClassName("btn");
var sli = document.getElementsByClassName("sli");
var no_btn = 4;
var no_slider = 2;

document.getElementById("bubble").onclick = function(){
    console.log((90 - speed - ((4 - Math.floor(150 / arr.length)) * 5)))
    for(var tt = 0; tt < no_btn; tt++){
        btns[tt].disabled = true;
        btns[tt].classList.add("disabled");
    }
    for(var ttt = 0; ttt < no_slider; ttt++){
        sli[ttt].disabled = true;
    }
    var ele = document.getElementsByClassName("bar");
    var sorted = [];
    var ind = 0;
    var animation = getBubbleAnimation();
    for(var p = 0; p < animation.length; p++){
        if(animation[p][0] == 0){
            setTimeout(function(p){
                for(var f in arr){
                    ele[f].style.backgroundColor = "dodgerblue";
                }
                for(var ff of sorted){
                    ele[ff].style.backgroundColor = "green";
                }
                ele[animation[p][1]].style.backgroundColor = "red";
                ele[animation[p][2]].style.backgroundColor = "red";
            }, p * (90 - speed - ((4 - Math.floor(150 / arr.length)) * 5)), p);
        }else if(animation[p][0] == 1){
            setTimeout(function(p){
                for(var f in arr){
                    ele[f].style.backgroundColor = "dodgerblue";
                }
                for(var ff of sorted){
                    ele[ff].style.backgroundColor = "green";
                }
                ele[animation[p][1]].style.backgroundColor = "red";
                ele[animation[p][2]].style.backgroundColor = "red";
                var t = ele[animation[p][1]].style.height;
                ele[animation[p][1]].style.height = ele[animation[p][2]].style.height;
                ele[animation[p][2]].style.height = t;
                var temp = arr[animation[p][1]];
                arr[animation[p][1]] = arr[animation[p][2]];
                arr[animation[p][2]] = temp;
            }, p * (90 - speed - ((4 - Math.floor(150 / arr.length)) * 5)), p);
        }else if(animation[p][0] == 2){
            setTimeout(function(p){
                sorted[ind++] = animation[p][1];
            }, p * (90 - speed - ((4 - Math.floor(150 / arr.length)) * 5)), p);
        }
    }
    setTimeout(function(){
        for(var f in arr){
            ele[f].style.backgroundColor = "green";
        }
        for(var tt = 0; tt < no_btn; tt++){
            btns[tt].disabled = false;
            btns[tt].classList.remove("disabled");
        }
        for(var ttt = 0; ttt < no_slider; ttt++){
            sli[ttt].disabled = false;
        }
    }, p * (90 - speed - ((4 - Math.floor(150 / arr.length)) * 5)));
}

function getBubbleAnimation(){
    var ln = l;
    var animate = [];
    var ind = 0;
    for (var x = 0; x < ln - 1; x++) {
        for(var y = 0; y < ln - 1 - x; y++){
            animate[ind++] = [0, y, y + 1];
            if(arr[y] > arr[y + 1]){
                var temp = arr[y];
                arr[y] = arr[y + 1];
                arr[y + 1] = temp;
                animate[ind++] = [1, y, y + 1];
            }
        }
        animate[ind++] = [2, y, null]
    }
    return animate;
}


speed_slider.oninput = function(){
    speed = this.value;
}