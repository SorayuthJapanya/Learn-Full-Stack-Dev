let analogClock = document.getElementById('analogClock');

for (let i = 1; i < 60; i++) {
    let dialline = document.createElement('div');
    dialline.className = 'diallines';
    dialline.style.transform = "rotate(" + 6 * i + "deg)";
    analogClock.appendChild(dialline);
}

function clock() {

    let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear();

    let hDeg = h * 30 + m * (360 / 720);
    let mDeg = m * 6 + s * (360 / 3600);
    let sDeg = s * 6;

    let hEl = document.querySelector('.hour-hand');
    let mEl = document.querySelector('.min-hand');
    let sEl = document.querySelector('.sec-hand');
    let dateEl = document.querySelector('.date');
    let dayEl = document.querySelector('.day');

    let day = weekday[d.getDay()];

    if (month < 9) {
        month = "0" + month;
    }

    hEl.style.transform = "rotate(" + hDeg + "deg)";
    mEl.style.transform = "rotate(" + mDeg + "deg)";
    sEl.style.transform = "rotate(" + sDeg + "deg)";
    dateEl.innerHTML = date + "/" + month + "/" + year;
    dayEl.innerHTML = day;
}

setInterval("clock()", 100);