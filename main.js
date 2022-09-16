
// nav open & close

const navItems = document.querySelector('.nav__items')
const openNavBtn = document.querySelector('#open__nav--btn')
const closeNavBtn = document.querySelector('#close__nav--btn')

const openNav = () => {
    navItems.style.display = 'flex'
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    navItems.style.display = 'none'
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}

// dashboard side bar

const sideBar = document.querySelector('aside');
const openSideBar = document.querySelector('#show__sidebar--btn');
const closeSideBar = document.querySelector('#hide__sidebar--btn');

const openSide = () => {
    sideBar.style.left = '0';
    openSideBar.style.display = 'none';
    closeSideBar.style.display = 'inline-block';
}


const closeSide = () => {
    sideBar.style.left = '-100%';
    openSideBar.style.display = 'inline-block';
    closeSideBar.style.display = 'none';
} 

openSideBar.addEventListener('click', openSide);
closeSideBar.addEventListener('click', closeSide); 


console.log(openSide)