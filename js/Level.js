const windowWidth = Number(window.innerWidth);
let noty = document.getElementById('scale');


function levelUp() {
    let levelBoard = document.getElementById('levelBoard');
    let progress = window.getComputedStyle(levelBoard).width;
    
    levelBoard.style.width = `calc(${progress} + 4%)`
    progress = Number(progress.slice(0, -2));
    
    // если ШКАЛА уровня заполнена, выполнить...
    if (progress >= windowWidth) {
        levelBoard.style.width = '1%';

        // уведомление о заполнении шкалы
        noty.style.top = '10px';
        setTimeout(()=>{ noty.style.top = '-100px'}, 3000)

        // начисление денег
    }
    // если ШКАЛА еще не заполнена
    else {
        console.log('Level up')
    }
}