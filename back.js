function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

var coin

function spawn() {
    var coinRarity = Number(getRandomArbitrary(1, 100)).toFixed(0);

    if (coinRarity < 3 ) {
        coin = document.createElement('img')
        coin.setAttribute('src', 'images/donut.PNG')
        coin.setAttribute('class', 'bcoin')
        coin.style = `animation: drop 4s forwards; left: ${getRandomArbitrary(-10, 100)}%`;
        document.body.appendChild(coin)

    

        const randomID = getRandomArbitrary(100000, 999999)
        coin.setAttribute('id', `coin${randomID}`)
        var func = 'tap('+randomID+')' // передаем айди через надатие в функцию
        coin.setAttribute('onclick', func)

        setTimeout(() => {
            coin.style.left = `${getRandomArbitrary(-10, 80)}%`;
            coin.style.rotate = `${getRandomArbitrary(-110, 110)}deg`;
        }, 100)
    }

    if (coinRarity < 11 && coinRarity > 3) {
        coin = document.createElement('img')
        coin.setAttribute('src', 'images/silver.PNG')
        coin.setAttribute('class', 'bcoin')
        coin.style = `animation: drop 4s forwards; left: ${getRandomArbitrary(-10, 100)}%`;
        document.body.appendChild(coin)

    

        const randomID = getRandomArbitrary(100000, 999999)
        coin.setAttribute('id', `coin${randomID}`)
        var func = 'tap('+randomID+')' // передаем айди через надатие в функцию
        coin.setAttribute('onclick', func)

        setTimeout(() => {
            coin.style.left = `${getRandomArbitrary(-10, 80)}%`;
            coin.style.rotate = `${getRandomArbitrary(-110, 110)}deg`;
        }, 100)
    }

    if (coinRarity >= 11) {
        coin = document.createElement('img')
        coin.setAttribute('src', 'images/IMG_0933.PNG')
        coin.setAttribute('class', 'bcoin')
        coin.style = `animation: drop 4s forwards; left: ${getRandomArbitrary(-10, 100)}%`;
        document.body.appendChild(coin)

    

        const randomID = getRandomArbitrary(100000, 999999)
        coin.setAttribute('id', `coin${randomID}`)
        var func = 'tap('+randomID+')' // передаем айди через надатие в функцию
        coin.setAttribute('onclick', func)

        setTimeout(() => {
            coin.style.left = `${getRandomArbitrary(-10, 80)}%`;
            coin.style.rotate = `${getRandomArbitrary(-110, 110)}deg`;
        }, 100)
    }

}

setInterval(spawn, 666)

