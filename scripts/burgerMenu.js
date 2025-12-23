
const burgerMenu = document.querySelector('.burgerMenu');
const menuScreen = document.querySelector('.mobileMenuScreen'); 
const menuScreenCloseButton = document.querySelector('.mobileMenu__closeButton')

export function runBurgerMenuScript () {
    burgerMenu.onclick = () => openMenu(true);
    menuScreenCloseButton.onclick = () => openMenu(false);
}

function openMenu(open) {
    menuScreen.style.display = open ? "block" : "none";
}

// This is used in the typographies script because it seems that you 
// can't add several event listeners to "window"
export function closeIfDesktop() {
    if (window.innerWidth >= 1100) openMenu(false);
}