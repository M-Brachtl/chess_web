const headingBtns = document.querySelectorAll('#heading-buttons button');

headingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        headingBtns.forEach(B => B.className = B === btn ? 'selected' : '');
    });
});