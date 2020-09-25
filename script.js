let counter = 0;
let counter_r = 6;
let counter_g = 12;

const s = document.querySelector('#red');
const go = document.querySelector('#green');
const c_red = document.querySelector('#wait');
const c_green = document.querySelector('#run');
const btn = document.querySelector('#btn')

let timerID = 0;

const start = () => {
    timerID = setInterval(() => {
        counter += 1;
        counter_r -= 1;
        counter_g -= 1

        if (counter < 7) {
            c_red.textContent = counter_r;
            s.src = "lights/stop-on.svg";
            go.src = "lights/walk-off.svg";
            
         } else if (counter >= 7 && counter <= 12 ){
             c_green.textContent = counter_g;
             c_red.textContent = " ";
             s.src = "lights/stop-off.svg";
             go.src = "lights/walk-on.svg";
         } else {
            clearInterval(timerID);
            c_green.textContent = " ";
             counter_r = 6;
             counter_g = 12;
             counter = 0;
             s.src = "lights/stop-on.svg";
             go.src = "lights/walk-off.svg";
         }
     }, 1000)};



btn.addEventListener('click', start);

