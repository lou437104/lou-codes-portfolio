//turn pages when click next or prev button 
const pageTurnBtn = document.querySelectorAll('.nextprev-btn back');


pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
        }
        else{
            pageTurn.classList.add('turn');
        }
    }
})