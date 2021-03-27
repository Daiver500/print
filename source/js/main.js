(function () {

const informationScrollButtons = document.querySelectorAll(".scroll");
const advantages = document.querySelector(".advantages");
const form = document.querySelector(".form__inner");

//Плавная прокрутка

const scrollButtonsClickHandler = (evt) => {
    switch (evt.target.id) {
      case "information-button":
        form.scrollIntoView({behavior: "smooth"});
        break;
      case "information-buttonmobile":
        form.scrollIntoView({behavior: "smooth"});
        break;
      case "information-scroll":
        advantages.scrollIntoView({behavior: "smooth"});
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
  footerMapButtonClose.addEventListener("click",hideFooterMapLists);
  footerContactsButtonOpen.addEventListener("click", showFooterContactsLists );
  footerContactsButtonClose.addEventListener("click", hideFooterContactsLists);
  

})();
