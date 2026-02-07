//turn pages when click next or prev button 
const pageTurnBtn = document.querySelectorAll('.nextprev-btn.back');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn'); // Remove 'turn' class to turn back
            setTimeout(()=> {})
        } else {
            pageTurn.classList.add('turn'); // Add 'turn' class to turn forward
        }
    };
});