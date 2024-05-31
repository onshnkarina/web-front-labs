function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showNews(id) {
    alert("Показать новость " + id);
}

const currencyRate = {};

async function fetchCurrencyRate() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    currencyRate.CZK = data.Valute.CZK.Value;
    console.log("Курс CZK: " + currencyRate.CZK);
}

function convertCurrency(from) {
    const rubInput = document.getElementById('rub');
    const czkInput = document.getElementById('czk');
    if (from === 'rub') {
        czkInput.value = (rubInput.value / currencyRate.CZK).toFixed(2);
    } else if (from === 'czk') {
        rubInput.value = (czkInput.value * currencyRate.CZK).toFixed(2);
    }
}
         
function openModal(activityId) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-backdrop').style.display = 'block';
    var allActivities = document.querySelectorAll('.modal-content');
    allActivities.forEach(function(activity) {
        activity.style.display = 'none';
    });
    document.getElementById(activityId).style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-backdrop').style.display = 'none';
}