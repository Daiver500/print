(function () {

  const informationScrollButtons = document.querySelectorAll(".scroll");
  const advantages = document.querySelector(".advantages");
  const form = document.querySelector(".form__inner");

  //Плавная прокрутка

  const scrollButtonsClickHandler = (evt) => {
    switch (evt.target.id) {
      case "information-button":
        form.scrollIntoView({
          behavior: "smooth"
        });
        break;
        case "information-button-text":
        form.scrollIntoView({
          behavior: "smooth"
        });
        break;
        case "information-button-text-mobile":
          form.scrollIntoView({
            behavior: "smooth"
          });
          break;
      case "information-scroll":
        advantages.scrollIntoView({
          behavior: "smooth"
        });
        break;
    }
  };

  informationScrollButtons.forEach((button) => {
    button.addEventListener("click", scrollButtonsClickHandler);
  });

  // Подвал мобильная версия

  const footerMapButtonOpen = document.querySelector(".map__button--open");
  const footerMapButtonClose = document.querySelector(".map__button--close");
  const footerMapLists = document.querySelector(".map__lists");
  const footerContactsButtonOpen = document.querySelector(".contacts__button--open");
  const footerContactsButtonClose = document.querySelector(".contacts__button--close");
  const footerContactsLists = document.querySelector(".contacts__information");

  const showFooterMapLists = () => {
    footerMapLists.classList.remove("map__lists--hidden");
    footerMapButtonOpen.classList.add("hidden");
    footerMapButtonClose.classList.remove("hidden");
  };

  const hideFooterMapLists = () => {
    footerMapLists.classList.add("map__lists--hidden");
    footerMapButtonOpen.classList.remove("hidden");
    footerMapButtonClose.classList.add("hidden");
  };

  const showFooterContactsLists = () => {
    footerContactsLists.classList.remove("contacts__information--hidden");
    footerContactsButtonOpen.classList.add("hidden");
    footerContactsButtonClose.classList.remove("hidden");
  };

  const hideFooterContactsLists = () => {
    footerContactsLists.classList.add("contacts__information--hidden");
    footerContactsButtonOpen.classList.remove("hidden");
    footerContactsButtonClose.classList.add("hidden");
  };


  footerMapButtonOpen.addEventListener("click", showFooterMapLists);
  footerMapButtonClose.addEventListener("click", hideFooterMapLists);
  footerContactsButtonOpen.addEventListener("click", showFooterContactsLists);
  footerContactsButtonClose.addEventListener("click", hideFooterContactsLists);


  // Маска

  let phoneInput = document.querySelector(".form__main-phone");
  let modalPhoneInput = document.querySelector(".modal__phone");
  //контроль количества введенных цифр
  let howDigits = str => str.split('').filter(el => /\d/.test(el)).length;
  //при фокусе подставляем +7(
  let whenFocusPhone = (evt) => evt.target.value = '+7(';
  //чтоб вводились только цифры
  let checkPhoneKey = (key) => key >= '0' && key <= '9';
  let checkNumPhone = (evt) => {
    if (!checkPhoneKey(evt.target.value[evt.target.value.length - 1]) || howDigits(evt.target.value) > 11) {
      evt.target.value = evt.target.value.slice(0, -1);
    }
    if (evt.target.value.length === 6) {
      evt.target.value += ')';
    }
    if (evt.target.value.length === 2) {
      evt.target.value += '(';
    }
  };

  const checkPhoneInput = () => {
    if (phoneInput.value.length < 14) {
      phoneInput.setCustomValidity("Номер должен быть из 10 цифр");
    } else {
      phoneInput.setCustomValidity(``);
    }
    phoneInput.reportValidity();
  };

  const checkModalPhoneInput = () => {
    if (modalPhoneInput.value.length < 14) {
      modalPhoneInput.setCustomValidity("Номер должен быть из 10 цифр");
    } else {
      modalPhoneInput.setCustomValidity(``);
    }
    modalPhoneInput.reportValidity();
  };

  const backspaceClickHandler = (evt) => {
    if (evt.key === `Backspace`) {
      phoneInput.value = '';
      phoneInput.value += '+7(';
    }
  };

  const backspaceModalClickHandler = (evt) => {
    if (evt.key === `Backspace`) {
      modalPhoneInput.value = '';
      modalPhoneInput.value += '+7(';
    }
  };


  phoneInput.addEventListener('input', checkPhoneInput);
  phoneInput.addEventListener('focus', whenFocusPhone);
  phoneInput.addEventListener('input', checkNumPhone);
  phoneInput.addEventListener('keydown', checkPhoneKey);
  phoneInput.addEventListener('keydown', backspaceClickHandler);
  phoneInput.addEventListener("click", function () {
    phoneInput.selectionStart = 4;
  });

  modalPhoneInput.addEventListener('input', checkModalPhoneInput);
  modalPhoneInput.addEventListener('focus', whenFocusPhone);
  modalPhoneInput.addEventListener('input', checkNumPhone);
  modalPhoneInput.addEventListener('keydown', checkPhoneKey);
  modalPhoneInput.addEventListener('keydown', backspaceModalClickHandler);
  modalPhoneInput.addEventListener("click", function () {
    modalPhoneInput.selectionStart = 4;
  });

  // Модальное окно

  const mainForm = document.querySelector(".form__main-data");
  const mainFormNameInput = document.querySelector(".form__main-name");
  const mainFormPhoneInput = document.querySelector(".form__main-phone");
  const mainFormTextInput = document.querySelector(".form__main-text");
  const modalForm = document.querySelector(".modal__form");
  //const phoneInput = document.querySelector(".modal__phone");
  const nameInput = document.querySelector(".modal__name");
  const textInput = document.querySelector(".modal__text");
  const openModalButton = document.querySelector(".navigation__button");
  const closeModalButton = document.querySelector(".modal__close");
  const modalMain = document.querySelector(".modal");
  //const modalInner = document.querySelector(".modal__inner");
  const modalSuccess = document.querySelector(".modal-success");
  const closemodalSuccessButton = document.querySelector(".modal-success__close");
  //const modal-successInner = document.querySelector(".modal-success__inner");
  const modalNameInput = document.querySelector(".modal__name");
  const formNameCheckbox = document.querySelector(".form__main-checkbox");

  const modalEscPressHandler = (evt) => {
    if (evt.key === `Escape`) {
      closeModal();
      evt.preventDefault();
    }
  };

  const windowClickHandler = (evt) => {
    if (evt.target === modalMain) {
      console.log(evt.target);
      closeModal();
    }
  };

  //const modalNameInputFocus = () => {
   // modalNameInput.focus();
  //};


  const openModal = () => {
    modalMain.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    mainFormNameInput.focus();
    inputFocus();
    closeModalButton.addEventListener("click", closeModalButtonClickHandler);
    modalMain.addEventListener("click", windowClickHandler);
    document.addEventListener("keydown", modalEscPressHandler);
    modalForm.addEventListener("submit", formSendingHandler);
  };

  const closeModal = () => {
    modalMain.classList.add("hidden");
    document.body.style.overflow = "";
    closeModalButton.removeEventListener("click", openModalButtonClickHandler);
    modalMain.removeEventListener("click", windowClickHandler);
    document.removeEventListener("keydown", modalEscPressHandler);
    modalForm.removeEventListener("submit", formSendingHandler);
  };

  const openModalButtonClickHandler = () => {
    openModal();
  };

  const closeModalButtonClickHandler = () => {
    closeModal();
  };

  openModalButton.addEventListener("click", openModalButtonClickHandler);
  closeModalButton.addEventListener("click", closeModalButtonClickHandler);


  const modalSuccessEscPressHandler = (evt) => {
    if (evt.key === `Escape`) {
      closeSuccessModal();
      evt.preventDefault();
    }
  };

  const windowSuccessClickHandler = (evt) => {
    if (evt.target === modalSuccess) {
      console.log(evt.target);
      closeSuccessModal();
    }
  };

  const openSuccessModal = () => {
    modalMain.classList.add("hidden");
    modalSuccess.classList.remove("hidden");
    modalSuccess.addEventListener("click", windowSuccessClickHandler);
    closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
    document.addEventListener("keydown", modalSuccessEscPressHandler);
  };

  const closeSuccessModal = () => {
    modalSuccess.classList.add("hidden");
    closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
    modalSuccess.removeEventListener("click", windowSuccessClickHandler);
    document.removeEventListener("keydown", modalSuccessEscPressHandler);
  };

  const closemodalSuccessButtonClickHandler = () => {
    closeSuccessModal();
  };

  closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);

  const formSendingHandler = (evt) => {
    phoneInput.value = "";
    nameInput.value = "";
    textInput.value = "";
    openSuccessModal();
    evt.preventDefault();
  };

  mainForm.addEventListener("submit", function (evt) {
    modalSuccess.classList.remove("hidden");
    localStorageSet();
    evt.preventDefault();
    closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
    document.addEventListener("keydown", modalSuccessEscPressHandler);
    document.addEventListener("click", windowSuccessClickHandler);
    mainFormNameInput.value = "";
    mainFormPhoneInput.value = "";
    mainFormTextInput.value = "";
  });

  // Local storage

  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  const localStorageSet = (evt) => {
    if(!mainFormNameInput || !mainFormPhoneInput) {
      evt.preventDefault();
      console.log("Нужно ввести имя и телефон");
    } else {
     if(isStorageSupport) {
       localStorage.setItem("login", mainFormNameInput.value);
     }
    }
  };

  const inputFocus = () => {
   if (storage) {
     modalNameInput.value = storage;
     modalPhoneInput.focus();
   } else {
    modalNameInput.focus();
   }
  };



})();

