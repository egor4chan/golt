// game functions

function tap(rid, coinsPerTap) {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light')
    var balance = Number(document.getElementById('balance').innerHTML);
    var elid = 'coin' + rid;
    var object = document.getElementById(elid)

        document.getElementById(elid).onclick = ''

    object.style.transition = '0.5s'
    object.style.top = '-100px'
    object.style.rotate = '100deg'
    object.style.scale = '1.3'

    setTimeout(()=> {object.style.scale = '0' }, 100)
    
    
    document.getElementById('balance').innerHTML = balance + Number(coinsPerTap)

}
