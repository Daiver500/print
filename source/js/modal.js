(function () {

const mainForm = document.querySelector(".form__main-data");
const mainFormNameInput = document.querySelector(".form__main-name");
const mainFormPhoneInput = document.querySelector(".form__main-phone");
const mainFormTextInput = document.querySelector(".form__main-text");
const modalForm = document.querySelector(".modal__form");
const phoneInput = document.querySelector(".modal__phone");
const nameInput = document.querySelector(".modal__name");
const textInput = document.querySelector(".modal__text");
const openModalButton = document.querySelector(".navigation__button");
const closeModalButton = document.querySelector(".modal__close");
const modalMain = document.querySelector(".modal");
//const modalInner = document.querySelector(".modal__inner");
const modalSuccess = document.querySelector(".modalsuccess");
const closeModalSuccessButton = document.querySelector(".modalsuccess__close");
//const modalSuccessInner = document.querySelector(".modalsuccess__inner");


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

const focusPhoneInput = () => {
    phoneInput.focus();
   };


const openModal = () => {
  modalMain.classList.remove("hidden");
  focusPhoneInput();
  closeModalButton.addEventListener("click", closeModalButtonClickHandler)
  modalMain.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", modalEscPressHandler);
  modalForm.addEventListener("submit", formSendingHandler);
};

const closeModal = () => {
    modalMain.classList.add("hidden");
    closeModalButton.removeEventListener("click", openModalButtonClickHandler)
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
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler)
  document.addEventListener("keydown", modalSuccessEscPressHandler);
};

const closeSuccessModal = () => {
  modalSuccess.classList.add("hidden");
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler)
  modalSuccess.removeEventListener("click", windowSuccessClickHandler);
  document.removeEventListener("keydown", modalSuccessEscPressHandler);
};

const closeModalSuccessButtonClickHandler = () => {
  closeSuccessModal();
};

closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler);

const formSendingHandler = (evt) => {
  phoneInput.value = "";
  nameInput.value = "";
  textInput.value = "";
  openSuccessModal();
  evt.preventDefault();
};

mainForm.addEventListener("submit", function (evt) {
  modalSuccess.classList.remove("hidden");
  evt.preventDefault();
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler);
  document.addEventListener("keydown", modalSuccessEscPressHandler);
  document.addEventListener("click", windowSuccessClickHandler );
  mainFormNameInput.value = "";
  mainFormPhoneInput.value = "";
  mainFormTextInput.value = "";
});

})();