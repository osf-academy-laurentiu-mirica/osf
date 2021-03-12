function mobileNavMenu(x) {
    x.classList.toggle("opened_menu");
    //show nav menu
    let nav = document.querySelector('#nav');
    showHideMe(nav);
}

function showHideMe(domElement) {
    const newLocal = getComputedStyle(domElement).display === "none";
    if (newLocal) {
        domElement.style.display = 'inherit';
        window.scrollTo(0, 0);
    } else {
        domElement.style.display = '';
    }
}

$('#cancelLogin').click(function () {
    location.reload();
})

//slider section controls
var sliderControls = document.querySelector('.marble').parentElement;
var cardHolderArr = [...document.querySelectorAll('#locale .mobile .card')];

sliderControls.addEventListener('click', function (event) {
    if (event.target.classList.contains('marble') && !event.target.classList.contains('active_marble')) {
        let index = [...sliderControls.querySelectorAll('div')].indexOf(event.target);
        let marbles = [...sliderControls.querySelectorAll('div')];

        hideAllLocaleCards();
        cardHolderArr[index].classList.remove('card-hidden');

        //change active marble
        marbles.forEach((marble) => {
            marble.classList.remove('active_marble');
        });
        marbles[index].classList.add('active_marble');
    }
})

function hideAllLocaleCards() {
    cardHolderArr.forEach((card) => {
        card.classList.add('card-hidden');
    })
}