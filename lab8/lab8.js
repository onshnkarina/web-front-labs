function showDate(){
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let out6 = document.getElementById('current-date6');
    
    let today = new Date();
    out1.innerHTML = 'Дата и время для локали России: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для локали Германии: ' + today.toLocaleString('de-DE');
    out3.innerHTML = 'Дата и время для локали Испании: ' + today.toLocaleString('es-ES');
    out4.innerHTML = 'Дата и время для локали Франции: ' + today.toLocaleString('fr-FR');
    out5.innerHTML = 'Дата и время для локали Италии: ' + today.toLocaleString('it-IT');
    out6.innerHTML = 'Дата и время для локали Ирландии: ' + today.toLocaleString('en-IE');
}
function showDateTime() {
    let currentDate = new Date();
    let dateTime = document.getElementById('date-time');
    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let date = document.getElementById('date');
    let dayOfWeek = document.getElementById('day-of-week');

    dateTime.textContent = currentDate.toLocaleString();
    year.textContent = currentDate.getFullYear();
    month.textContent = currentDate.getMonth() + 1; 
    date.textContent = currentDate.getDate();
    dayOfWeek.textContent = DayOfWeekName(currentDate.getDay());
}
function DayOfWeekName(dayIndex) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dayIndex];
}
function DayOfWeek() {
    const vvodDate = document.getElementById('vvod-date').value;
    const vvodMonth = document.getElementById('vvod-month').value - 1; 
    const vvodYear = document.getElementById('vvod-year').value;

    const inputDate = new Date(vvodYear, vvodMonth, vvodDate);
    const dayweek = DayOfWeekName(inputDate.getDay());

    const outputDiv = document.getElementById('vivod-day-of-week');
    outputDiv.textContent = `День недели для указанной даты: ${dayweek}`;
}