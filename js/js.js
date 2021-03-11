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
    } else {
        domElement.style.display = '';
    }
}

$('#cancelLogin').click(function(){
    location.reload();
})