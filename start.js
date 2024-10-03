var WebApp = window.Telegram.WebApp;
    
WebApp.expand()

setTimeout(()=>{
    WebApp.HapticFeedback.impactOccurred('light')
    location.href = 'game.html'
}, 3500)