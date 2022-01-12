
window.addEventListener('load', () => {

    document.querySelector('.js-preloader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.js-preloader').style.display = 'none';
    }, 600)
});

// nav
const navToggler = document.querySelector('.js-nav-toggler');
const nav = document.querySelector('.js-nav');

function navToggle() {
    nav.classList.toggle('active');
    navToggler.classList.toggle('active');
}
navToggler.addEventListener('click', navToggle);

document.addEventListener('click', (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOutsideNavToggler = navToggler.contains(e.target);
    if(!(isClickInsideNav || isClickOutsideNavToggler) && nav.classList.contains('active')) {
        navToggle();
    }
});

// theme light dark
function themeLightDark(){
    const switcherBtn = document.querySelector('.js-switcher-btn');
    const icon = switcherBtn.querySelector('i'); //error

    function changeIcon(){
        if(document.body.classList.contains('dark')){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }else{
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    switcherBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        changeIcon();
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme', 'dark');
        }else{
            localStorage.setItem('theme', 'light');
        }
    });

    // check preferences user
    if(localStorage.getItem('theme') !== null){
        if(localStorage.getItem('theme') === 'light'){
            document.body.classList.remove('dark');
        }else{
            document.body.classList.add('dark');
        }
    }
    changeIcon();
}
themeLightDark();