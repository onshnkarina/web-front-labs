function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    time = document.querySelector('.str')
    time.style.transform = `rotate(${new Date().getSeconds() * 6}deg) translate(0, -75px)`; 
}
setInterval(showTime,1000);