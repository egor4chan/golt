var balanceOnShop = Number(document.getElementById('balance').innerHTML)
var goldCost = Number(document.getElementById('goldCost').innerHTML);

if (balanceOnShop >= goldCost) {
    document.getElementById('goldCost').style.color = 'white'
}


function shake(pos) {
    if (pos == 1) 
        var goldTask = document.getElementById('goldtask');
    if (pos == 2)
        var goldTask = document.getElementById('plattask')
    if (pos == 3)
        var goldTask = document.getElementById('donuttask')
    goldTask.style = 'animation: shake 0.3s forwards';

    setTimeout(()=>{
        goldTask.style.animation = ''
    }, 300)
}

