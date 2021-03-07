function mobileNavMenu(x) {
    x.classList.toggle("opened_menu");
    //show nav menu
    let nav = document.querySelector('#nav');
    showHideMe(nav);
}

function showHideMe(domElement) {
    if (getComputedStyle(domElement).display === "none") {
        domElement.style.display = 'inherit';
    } else {
        domElement.style.display = '';
    }
}

$('#cancelLogin').click(function(){
    location.reload();
})