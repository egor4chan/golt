var balanceInner = document.getElementById('balance');

function updateBalanceLocalStorage(minus) {
    var result = Number(window.localStorage.getItem('balance')) - Number(minus);
    window.localStorage.setItem('balance', result)

    document.getElementById('balance').innerHTML = Number(document.getElementById('balance').innerHTML) - Number(minus)
    checkCosts()
}

function upgradeLevel(rarity) {
    // GOLD COIN
    if (rarity == 1) { 
        var res = Number(window.localStorage.getItem('gold')) + 1;
        window.localStorage.setItem('gold', res);
        document.getElementById('gold').innerHTML = res;
        document.getElementById('goldEarn').innerHTML = res * 1;
    }
    // PLATINUM COIN
    if (rarity == 2) { 
        var res = Number(window.localStorage.getItem('plat')) + 1;
        window.localStorage.setItem('plat', res);
        document.getElementById('plat').innerHTML = res;
        document.getElementById('platEarn').innerHTML = res * 5;
    }
    // DONUT COIN
    if (rarity == 3) { 
        var res = Number(window.localStorage.getItem('donut')) + 1;
        window.localStorage.setItem('donut', res);
        document.getElementById('donut').innerHTML = res;
        document.getElementById('donutEarn').innerHTML = res * 50;
    }
}

function update(position) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.notificationOccurred('success')

    if (position == 1) {
        updateBalanceLocalStorage(300) // списать деньги
        upgradeLevel(1) // улучшить
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 2) {
        updateBalanceLocalStorage(500)
        upgradeLevel(2)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 3) {
        updateBalanceLocalStorage(1000)
        upgradeLevel(3)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }
}