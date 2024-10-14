var balance = window.localStorage.getItem('balance');
var level = window.localStorage.getItem('donut');

const GoldPrice = {1: 100, 2: 300, 3: 1000, 4: 2000, 5: 5000, 6: 7500, 7: 10000}
const PlatPrice = {1: 200, 2: 500, 3: 1500, 4: 2500, 5: 7500}
const DonutPrice = {1: 300, 2: 1000, 3: 3000, 4: 5000, 5: 10000}
// debug 
//window.localStorage.setItem('balance', 1100)

// если пользователь зарегистрирован
if (balance != null) {
    var balance = window.localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance;

    document.getElementById('gold').innerHTML = window.localStorage.getItem('gold');
    document.getElementById('plat').innerHTML = window.localStorage.getItem('plat');
    document.getElementById('donut').innerHTML = window.localStorage.getItem('donut');

    document.getElementById('goldEarn').innerHTML = window.localStorage.getItem('gold');
    document.getElementById('platEarn').innerHTML = Number(window.localStorage.getItem('plat')) * 5;
    document.getElementById('donutEarn').innerHTML = Number(window.localStorage.getItem('donut')) * 50;

    document.getElementById('GoldPrice').innerHTML = GoldPrice[window.localStorage.getItem('gold')]
    document.getElementById('PlatPrice').innerHTML = PlatPrice[window.localStorage.getItem('plat')]
    document.getElementById('DonutPrice').innerHTML = DonutPrice[window.localStorage.getItem('donut')]
}


// если это новый пользователь
else {
    document.getElementById('balance').innerHTML = 0;
    window.localStorage.setItem('balance', 0);
    window.localStorage.setItem('gold', 1)
    window.localStorage.setItem('plat', 1)
    window.localStorage.setItem('donut', 1)
    // начисляем первый уровень всем позициям 
}

if (level == null) {
    window.localStorage.setItem('gold', 1)
    window.localStorage.setItem('plat', 1)
    window.localStorage.setItem('donut', 1)
}