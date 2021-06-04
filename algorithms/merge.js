var speed = 30;
var speed_slider = document.getElementById("speed");
var btns = document.getElementsByClassName("btn");
var sli = document.getElementsByClassName("sli");
var no_btn = 4;
var no_slider = 2;

document.getElementById("merge").onclick = function() {
    console.log((100 - speed - ((4 - Math.floor(150 / arr.length)) * 9)))
    for(let tt = 0; tt < no_btn; tt++){
        btns[tt].disabled = true;
        btns[tt].classList.add("disabled");
    }
    for(let ttt = 0; ttt < no_slider; ttt++){
        sli[ttt].disabled = true;
    }
    const an = getMergeSortAnimations(arr);
    const arrayBars = document.getElementsByClassName('bar');
    for (var i = 0; i < an.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = an[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "dodgerblue";
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 9)));
        } else {
            setTimeout((i) => {
                let [barOneIdx, newHeight] = an[i];
                newHeight = newHeight / 10000 * 100;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}%`;
            }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 9)), i);
        }
    }
    setTimeout(function(){
        for(let f in arr){
            arrayBars[f].style.backgroundColor = "green";
        }
        for(let tt = 0; tt < no_btn; tt++){
            btns[tt].disabled = true;
            btns[tt].classList.add("disabled");
        }
        for(let ttt = 0; ttt < no_slider; ttt++){
            sli[ttt].disabled = true;
        }
    }, i * (100 - speed - ((4 - Math.floor(150 / arr.length)) * 9)));
}


function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


  speed_slider.oninput = function(){
    speed = this.value;
}