// game functions

function tap(rid) {
    var balance = Number(document.getElementById('balance').innerHTML);
    var elid = 'coin' + rid;
    var object = document.getElementById(elid)

    object.style.transition = '0.5s'
    object.style.top = '-100px'
    object.style.rotate = '100deg'
    object.style.scale = '1.3'

    setTimeout(()=> {object.style.scale = '0' }, 100)
    
    
    document.getElementById('balance').innerHTML = balance + 1

}
