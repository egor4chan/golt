function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

var coin
var randomID

function spawn() {
    var coinRarity = Number(getRandomArbitrary(1, 100)).toFixed(0);
    var randomID = getRandomArbitrary(100000, 999999)

    if (coinRarity < 3 ) {
        create_coin(3, randomID)
    }

    if (coinRarity < 11 && coinRarity > 3) {
        create_coin(2, randomID)
    }

    if (coinRarity >= 11) {
        create_coin(1, randomID)
    }


}

setInterval(spawn, 466)

function create_coin(rarity, id) {
    coin = document.createElement('img')

    if (rarity == 1) 
        coin.setAttribute('src', 'images/IMG_0933.PNG')
        var func = `tap(${id}, ${rarity})`
    if (rarity == 2)
        coin.setAttribute('src', 'images/silver.PNG')
        var func = `tap(${id}, ${rarity})`
    if (rarity == 3) 
        coin.setAttribute('src', 'images/donut.PNG')
        var func = `tap(${id}, ${rarity})`

    coin.setAttribute('class', 'bcoin')

    if (id % 2 == 0) {
        coin.style = `animation: drop 4s forwards; left: ${getRandomArbitrary(-10, 100)}%`;
    }
    else {
        coin.style = `animation: drop_second 4s forwards; left: ${getRandomArbitrary(-10, 100)}%`;
    }
        
    document.body.appendChild(coin)


    coin.setAttribute('id', `coin${id}`)
     // передаем айди через надатие в функцию
    coin.setAttribute('onclick', func)

    setTimeout(()=>{
        document.getElementById(`coin${id}`).remove()
    }, 4000)


}