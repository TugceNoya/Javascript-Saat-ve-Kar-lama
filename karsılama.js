info = prompt("İsminizi girin");
myName.getElementById("myName").innerHTML = `${info}`;
let day = new Date().toLocaleDateString('Tr');
let clock = new Date().toLocaleTimeString('tr');
document.getElementById("myClock").innerHTML = `${clock} ${day}`
