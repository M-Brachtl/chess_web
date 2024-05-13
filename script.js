const headingBtns = document.querySelectorAll('#heading-buttons button');

headingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        headingBtns.forEach(B => B.className = B === btn ? 'selected' : '');
    });
});

// document.querySelector('.na-tahu.yes').className = 'na-tahu no'
if (window.location.hash.split('-')[0] === "#black") {
    document.querySelector(".chessboard").classList.add("blackview");
    document.querySelectorAll(".cb-tools button")[0].textContent = "O-O"
    document.querySelectorAll(".cb-tools button")[1].textContent = "O-O-O"
    const protocol = document.getElementById("protocol-line");
    protocol.style.setProperty("margin-left", "20px", "important");
    document.querySelector(".player-info#white div input").value = "AI"
    document.querySelector(".player-info#black div input").value = "Hráč"
}else{
    protocol.style.setProperty("margin-right", "20px", "important");
}

function creditsShow() {
    document.getElementById("credits-footer").classList.add("opened");
}
function creditsHide() {
    document.getElementById("credits-footer").classList.remove("opened");
}