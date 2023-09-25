function makebubble() {
    var store = "";

    for (i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10);
        store += `<button id="num" >${rn}</button>`;
    }

    var a = document.querySelector('.bottom').innerHTML = store;
}

var newhit = 0;
function hit() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector('.hit').innerHTML = newhit;
}

var score = 0;
function scores(){
    score += 10;
    document.querySelector('.score').textContent = score;
}

var time = 60;
function timer() {
    var timers = setInterval(function(){
        if (time > 0){
            time--;
            document.querySelector('.timer').textContent = time;
        }
        else{
            clearInterval(timers);
            document.querySelector('.bottom').innerHTML = `Game Over \nYour Score Is <span style="color: wheat; background-color: black;">${ score} </span>`;
        }
    },1000);
}

document.querySelector('.bottom').addEventListener("click",function(dets){
    // alert("Chal rha nii h but esa kyu")
    var bubble = Number(dets.target.textContent)
    if (bubble === newhit){
        makebubble();
        hit();
        scores();
    }
})
makebubble();
hit();
timer();
console.log(score);