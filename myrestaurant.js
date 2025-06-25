const togglebar =document.querySelector('.hamburger');
const headermenu =document.querySelector('.header-menus');

if(togglebar){
    togglebar.addEventListener('click' , ()=>{
        headermenu.classList.add('active');
    });
};

if(headermenu){
    headermenu.addEventListener('click' ,()=>{
        headermenu.classList.remove('active');
    });
};