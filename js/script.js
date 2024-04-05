// Menu burger

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const imgMenu = document.querySelector('#img-menu');

burger.addEventListener('click', ()=> {
    if (sidebar.style.display == 'none') {
        sidebar.style.display = 'block';
        imgMenu.src = "images/icon-close.svg";
    } else {
        sidebar.style.display = 'none';
        imgMenu.src = "images/icon-hamburger.svg";
    }
});

function mudouTamanho() {
    if (window.innerWidth < 872) {
        sidebar.style.display = 'none';
        imgMenu.src = "images/icon-hamburger.svg";
    } else {
        sidebar.style.display = 'block';
    }
}
mudouTamanho()