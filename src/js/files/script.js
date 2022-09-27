// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";




document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');

if (menuBlocks.length) {
  menuBlocks.forEach(menuBlocks =>{
    const menuBlockItems = menuBlocks.querySelectorAll('.sub-menu-catalog__category').length;

    menuBlocks.classList.add(`sub-menu-catalog__block_${menuBlockItems}`)
  })
}

function documentActions(e){
  const targetElement = e.target;
  if(targetElement.closest('[data-parent]')){
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`)

    if (subMenu) {
      const activeLink = document.querySelector('._sub-menu-active')
      const activeBlock =  document.querySelector('._sub-menu-open')

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove('_sub-menu-active')
        activeBlock.classList.remove('_sub-menu-open')
        document.documentElement.classList.remove('sub-menu-open')
      }
      document.documentElement.classList.toggle('sub-menu-open')
      targetElement.classList.toggle('_sub-menu-active')
      subMenu.classList.toggle('_sub-menu-open')
    } else {
      console.log('Пусто что-то не так');
    }
    e.preventDefault();
  }

  if(targetElement.closest('.menu-top-header__link_catalog')){
    // const catalogLink = targetElement.closest('.menu-top-header__link_catalog');
    document.documentElement.classList.add('catalog-open');
    e.preventDefault();
  }

  if(targetElement.closest('.menu-catalog__back')){
      document.documentElement.classList.remove('catalog-open');

      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('._sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('._sub-menu-open') : null;

      e.preventDefault();
  }
  if(targetElement.closest('.sub-menu-catalog__back')){
      document.documentElement.classList.remove('sub-menu-open')
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('._sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('._sub-menu-open') : null;

      e.preventDefault();
  }
}