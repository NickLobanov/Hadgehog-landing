const button = document.querySelector('.description__button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const allCheckbox = popup.querySelectorAll('.popup__checkbox');
const popupButton = popup.querySelector('.popup__button')

function popupClose() {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keyup', handleEecClick)
    allCheckbox.forEach(item => {
        item.checked = false
    })
}

function handleEecClick(evt) {
    if(evt.key === 'Escape') {
        popupClose()
    }
}

function popupOpen() {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', handleEecClick);
}

button.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);

function handleForm(evt) {
    evt.preventDefault();
    popupClose()
}

popupButton.addEventListener('click', handleForm)

//Открытие меню информации
const infoHog = document.querySelectorAll('.service__info')

infoHog.forEach(item => {
    const infoImage = item.querySelector('.service__info-image');
    const infoLikes = item.querySelector('.service__likes');
    infoImage.addEventListener('mouseover', () => {
        infoLikes.classList.add('service__likes_active')
    });
    item.addEventListener('mouseout', () => {
        infoLikes.classList.remove('service__likes_active')
    });
})

//Открытие мобильного меню
const burger = document.querySelector('.navbar__burger')
const mobilePopup = document.querySelector('.mobile-popup')
const closeMenuButton = mobilePopup.querySelector('.mobile-popup__close')

function openMobilePopup() {
    mobilePopup.classList.add('mobile-popup_opened')
}

function closeMobilePopup() {
    mobilePopup.classList.remove('mobile-popup_opened')
}

burger.addEventListener('click', openMobilePopup);
closeMenuButton.addEventListener('click', closeMobilePopup)

//Открытие меню каталога
const catalog = document.querySelector('.navbar__menu-item_type_list');
const navbarSelector = document.querySelector('.navbar__selector');

function handlaCatalogClick() {
    navbarSelector.classList.toggle('navbar__selector_opened')
    catalog.classList.toggle('navbar__menu-item_type_opened')
}

catalog.addEventListener('click', handlaCatalogClick)