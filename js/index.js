let inputs = document.querySelectorAll('input');

let submit = document.querySelector('form');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');

let wm = document.getElementById('w-minutes');
let ws = document.getElementById('w-seconds');

let bm = document.getElementById('b-minutes');
let bs = document.getElementById('b-seconds');

submit.addEventListener('submit', function (e) {
    e.preventDefault();
    if (startTimer === undefined) {
        wm.innerText = inputs[0].value;
        ws.innerText = inputs[1].value;
        bm.innerText = inputs[2].value;
        bs.innerText = inputs[3].value;
    }
    else (alert('Nu te grabi!'))
})

let startTimer;



start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else (alert('Ce tot apesi asa, puiule? Mai ai doua butoane...vrei lista de instructiuni?'))
})

reset.addEventListener('click', function () {
    wm.innerText = inputs[0].value;
    ws.innerText = inputs[1].value;
    bm.innerText = inputs[2].value;
    bs.innerText = inputs[3].value;
    document.getElementById('counter').innerText = 0;
    clearInterval(startTimer);
    startTimer = undefined;
})

pause.addEventListener('click', function () {
    clearInterval(startTimer);
    startTimer = undefined;
})

function timer() {
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }
    if (wm.innerText == 0 && ws.innerText == 0 & bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = inputs[0].value;
        ws.innerText = inputs[1].value;
        bm.innerText = inputs[2].value;
        bs.innerText = inputs[3].value;
        document.getElementById('counter').innerText++;
    }
}

