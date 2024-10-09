var balanceLocalStorage = Number(window.localStorage.getItem('balance'));
var goldCost = document.getElementById('goldCost').innerHTML;
var platCost = document.getElementById('platCost').innerHTML;
var donutCost = document.getElementById('donutCost').innerHTML;

goldCost = parseInt(goldCost.match(/\d+/))
platCost = parseInt(platCost.match(/\d+/))
donutCost = parseInt(donutCost.match(/\d+/))

if (balanceLocalStorage >= goldCost) {
    document.getElementById('goldCost').style.color = 'white';
    document.getElementById('goldtask').setAttribute('onclick', 'openWindow(1)');

}
if (balanceLocalStorage >= platCost) {
    document.getElementById('platCost').style.color = 'white';
    document.getElementById('plattask').setAttribute('onclick', 'openWindow(2)');
}
if (balanceLocalStorage >= donutCost) {
    document.getElementById('donutCost').style.color = 'white';
    document.getElementById('donuttask').setAttribute('onclick', 'openWindow(3)');
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

function removeWindow() {
    document.getElementById('center').style = 'filter: blur(0px)';
    document.getElementById('positions').style = 'filter: blur(0px)';
    
    document.getElementById('cloud').remove()
}

function openWindow(pos) {

    document.getElementById('center').style = 'filter: blur(10px)';
    document.getElementById('positions').style = 'filter: blur(10px)';

    if (pos == 1) {
        var cloud = document.createElement('div');
        cloud.setAttribute('id', 'cloud');
        document.body.appendChild(cloud)
        cloud.style.top = '160px';

        var button = document.createElement('button');
        button.setAttribute('id', 'buyPosition');
        button.innerHTML = 'BUY FOR 300 '
        button.setAttribute('onclick', 'removeWindow()')
        cloud.appendChild(button);

        var coinImage = document.createElement('img');
        coinImage.setAttribute('src', 'images/IMG_0933.PNG')
        coinImage.setAttribute('id', 'coinlittle')
        button.appendChild(coinImage)

        cloud.style = 'filter: blur(0px)'
    }

    if (pos == 2) {
        var cloud = document.createElement('div');
        cloud.setAttribute('id', 'cloud');
        document.body.appendChild(cloud)

        var button = document.createElement('button');
        button.setAttribute('id', 'buyPosition');
        button.innerHTML = 'BUY FOR 500 '
        button.setAttribute('onclick', 'removeWindow()')
        cloud.appendChild(button);

        var coinImage = document.createElement('img');
        coinImage.setAttribute('src', 'images/IMG_0933.PNG')
        coinImage.setAttribute('id', 'coinlittle')
        button.appendChild(coinImage)

        cloud.style = 'filter: blur(0px)'
    }

    if (pos == 3) {
        var cloud = document.createElement('div');
        cloud.setAttribute('id', 'cloud');
        document.body.appendChild(cloud)

        var button = document.createElement('button');
        button.setAttribute('id', 'buyPosition');
        button.innerHTML = 'BUY FOR 1000 '
        button.setAttribute('onclick', 'removeWindow()')
        cloud.appendChild(button);

        var coinImage = document.createElement('img');
        coinImage.setAttribute('src', 'images/IMG_0933.PNG')
        coinImage.setAttribute('id', 'coinlittle')
        button.appendChild(coinImage)

        cloud.style = 'filter: blur(0px)'
    }
}