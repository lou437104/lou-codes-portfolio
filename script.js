// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            // Turn the page back
            pageTurn.classList.remove('turn'); // Remove 'turn' class to turn back
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index; // Adjust zIndex for backward turn
            }, 500)
        } else {
            // Turn the page forward
            pageTurn.classList.add('turn'); // Add 'turn' class to turn forward
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index; // Adjust zIndex for forward turn
            }, 500)
        }
    };
});


//contact button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('btn.Contact-me');


contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');


        setTimeout(() => {
            page.style.zIndex = 20 + index;
        }, 500)
        }, (index +1)*200 +100)
    })
}