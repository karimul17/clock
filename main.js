let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;
   

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
  

    
////////////////////////////////////////////////////////////////////

let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')



// ampml.innerHTML = 

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
 


    let   am = (h<12)? "AM":"PM";
    h = (h > 12) ? h - 12 : h;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}


setInterval(displayTime, 1000);





