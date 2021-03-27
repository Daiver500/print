(function () {

const informationScroll = document.querySelector(".information__scroll");
const advantages = document.querySelector(".advantages");
const informationButton = document.querySelector(".information__button");
const form = document.querySelector(".form__main");

informationScroll.addEventListener("click", function() {
    advantages.scrollIntoView({behavior: "smooth"});
});

})();

  