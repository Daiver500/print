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
      case "information-buttonmobile":
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

  modalPhoneInput.addEventListener('input', checkModalPhoneInput);
  modalPhoneInput.addEventListener('focus', whenFocusPhone);
  modalPhoneInput.addEventListener('input', checkNumPhone);
  modalPhoneInput.addEventListener('keydown', checkPhoneKey);
  modalPhoneInput.addEventListener('keydown', backspaceModalClickHandler);

})();