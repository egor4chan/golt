var balance = window.localStorage.getItem('balance');

// debug 
window.localStorage.setItem('balance', 1100)

if (balance != null) {
    var balance = window.localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance;
}
else {
    document.getElementById('balance').innerHTML = 0;
    window.localStorage.setItem('balance', 0);
}