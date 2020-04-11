
var Peer = require('simple-peer')
var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false
});


peer.on('signal', (data) => {
    document.getElementById('yourId').value = JSON.stringify(data);
});

document.getElementById('conect').addEventListener('click', () => {
    var otherId = JSON.parse(document.getElementById('otherId').value);
    peer.signal(otherId);
});


document.getElementById('sendMessage').addEventListener('click', () => {
    var yourMessage = document.getElementById('yourMessage').value;
    peer.send(yourMessage);
});

peer.on('data', (data) => {
    document.getElementById('message').textContent += data ;
});