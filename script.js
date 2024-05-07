const headingBtns = document.querySelectorAll('#heading-buttons button');

headingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        headingBtns.forEach(B => B.className = B === btn ? 'selected' : '');
    });
});

// document.querySelector('.na-tahu.yes').className = 'na-tahu no'
if (window.location.hash.split('-')[0] === "#black") {
    document.querySelector(".chessboard").classList.add("blackview");
    document.querySelector(".cb-tools").innerHTML = '<button class="castle">O-O</button><p id="protocol-line">Můžete začít</p><button class="castle">O-O-O</button>';
    const protocol = document.getElementById("protocol-line");
    protocol.style.setProperty("margin-left", "20px", "important");
    document.querySelector(".player-info#white div input").value = "AI"
    document.querySelector(".player-info#black div input").value = "Hráč"
}else{
    protocol.style.setProperty("margin-right", "20px", "important");
}