function updateClock(){
    const now = new Date();
    const hour = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
    const minute = now.getMinutes() * 6;
    const second = now.getSeconds() * 6;

    document.getElementById('hour-hand').style.transform = `rotate(${hour}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minute}deg)`;
    document.getElementById('seconds-hand').style.transform = `rotate(${second}deg)`;
}
updateClock();
setInterval(updateClock, 1000);
