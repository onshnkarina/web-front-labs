function ShowDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = Math.floor((today - birthday)/1000/60/60/24);

    let outputdays = document.getElementById('days-count');
    outputdays.innerHTML = `Количество дней с даты рождения: ${daysCount}`;
}
function clearT(){
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = ' ';
    
    let outputdays = document.getElementById('days-count');
    outputdays.innerHTML = ' '; 
}
