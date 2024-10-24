var frens = document.getElementById('frenshtml');
var board = document.getElementById('boardhtml');



function locate_new(src) {
    if (src == 1) {
        board.style.position = 'relative'
        board.style.animation = 'open 0.5s forwards'

        frens.style.position = 'absolute'
        frens.style.animation = 'close 0.5s forwards'
        
    }
    if (src == 2) {
        frens.style.position = 'relative'
        frens.style.animation = 'open 0.5s forwards'
        
        board.style.position = 'absolute'
        board.style.animation = 'close 0.5s forwards'

    }
}