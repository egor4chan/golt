var balance = window.localStorage.getItem('balance');

if (balance != null) {
    document.getElementById('balance').innerHTML = balance;
}
else {
    document.getElementById('balance').innerHTML = 0;
    window.localStorage.setItem('balance', 0);
}