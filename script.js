window.addEventListener('DOMContentLoaded',function () {
    const menu = this.document.querySelector('.top__navigation');
    menu.addEventListener('click', e=>{
        menu.classList.remove('top__navigation--opened');
    });
    this.document.querySelector('#menu').addEventListener('click', e=>{
        e.preventDefault();
        menu.classList.add('top__navigation--opened');
    })
});