const button = document.querySelector('.description__button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');

function popupClose() {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keyup', handleEecClick)
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

function removeDisable() {
    popupButton.removeAttribute('disabled');
    checkboxInfo.removeAttribute('disabled');
    inputName.removeAttribute('disabled')
}

function handleForm() {
    if (checkboxHog.checked && checkboxCare.checked && checkboxInfo.checked) {
        removeDisable();
        inputName.setAttribute('disabled', true);
    } else if (checkboxHog.checked && checkboxCare.checked) {
        removeDisable();
        checkboxInfo.setAttribute('disabled', true);
        popupButton.setAttribute('disabled', true);
    } else if (checkboxHog.checked) {
        removeDisable();
        popupButton.setAttribute('disabled', true);  
    }
}

const popupButton = popup.querySelector('.popup__button')
const checkboxHog = popup.querySelector('#buy-hog');
const checkboxCare = popup.querySelector('#about-care');
const checkboxInfo = popup.querySelector('#about-buy');
const inputName = popup.querySelector('.popup__name')
const allCheckbox = popup.querySelectorAll('.popup__checkbox');
allCheckbox.forEach(item => {
    item.addEventListener('input', handleForm)
})

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

const catalog = document.querySelector('.navbar__menu-item_type_list');
const navbarSelector = document.querySelector('.navbar__selector');

function handlaCatalogClick() {
    navbarSelector.classList.toggle('navbar__selector_opened')
    catalog.classList.toggle('navbar__menu-item_type_opened')
}

catalog.addEventListener('click', handlaCatalogClick)