// game functions

function tap(rid, rarity) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    var balance = Number(document.getElementById('balance').innerHTML);
    var elid = 'coin' + rid;
    var object = document.getElementById(elid)

    var newBalance = Number(window.localStorage.getItem('balance'))
    

    document.getElementById(elid).onclick = ''

    if (rarity == 1) {
        var coinsPerTap = 1
        window.localStorage.setItem('balance', newBalance + 1) 
    }
    if (rarity == 2) {
        var coinsPerTap = 5
        window.localStorage.setItem('balance', newBalance + 5)
    }
    if (rarity == 3) {
        var coinsPerTap = 50
        window.localStorage.setItem('balance', newBalance + 50)
    }

    object.style.transition = '0.5s'
    object.style.top = '-100px'
    
    object.style.scale = '1.3'

    setTimeout(()=> {object.style.scale = '0' }, 100)
    
    
    document.getElementById('balance').innerHTML = balance + Number(coinsPerTap)

}
