const windowWidth = Number(window.innerWidth);

function levelUp() {
    let levelBoard = document.getElementById('levelBoard');
    let progress = window.getComputedStyle(levelBoard).width;
    
    levelBoard.style.width = `calc(${progress} + 1%)`
    progress = Number(progress.slice(0, -2));
    
    // если ШКАЛА уровня заполнена, выполнить...
    if (progress >= windowWidth) {
        levelBoard.style.width = '1%';
    }
    // если ШКАЛА еще не заполнена
    else {
        console.log('Level up')
    }
}