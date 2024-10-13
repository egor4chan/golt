var balance = window.localStorage.getItem('balance');

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
}

// если это новый пользователь
else {
    document.getElementById('balance').innerHTML = 0;
    window.localStorage.setItem('balance', 0);

    // начисляем первый уровень всем позициям 
    window.localStorage.setItem('gold', 1);
    window.localStorage.setItem('plat', 1);
    window.localStorage.setItem('donut', 1);
}