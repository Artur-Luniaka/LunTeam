// Modal menu
let openMenuBtn = document.getElementsByClassName('open-menu-btn')[0];
let closeMenuBtn = document.getElementsByClassName('menu-close')[0];
let menu = document.getElementsByClassName('header-box-menu')[0];
let menuItems = menu.getElementsByTagName('a');
openMenuBtn.addEventListener('click', function() {
    menu.classList.add('is-open');
});
closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('is-open');
});
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        menu.classList.remove('is-open');
    });
}
