var balanceInner = document.getElementById('balance');

function updateBalanceLocalStorage(minus) {
    var result = Number(window.localStorage.getItem('balance')) - Number(minus);
    window.localStorage.setItem('balance', result)

    document.getElementById('balance').innerHTML = Number(document.getElementById('balance').innerHTML) - Number(minus)
    checkCosts()
}

function update(position) {
    if (position == 1) {
        updateBalanceLocalStorage(300)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 2) {
        updateBalanceLocalStorage(500)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }

    if (position == 3) {
        updateBalanceLocalStorage(1000)
        document.getElementById('notify').style = 'animation: notify 3s ease forwards'
        setTimeout(()=>{ document.getElementById('notify').style = 'animation: none;'}, 3000)
    }
}