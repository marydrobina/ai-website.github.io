class PopUp {
  constructor() {
    this.#togglePopUp();
  }

  #togglePopUp() {
    const $popUpBtn = $(".pop-up-btn");

    $popUpBtn.on("click", function () {
      const $card = $(this).closest(".card");
      const $cardDescription = $card.find(".card__description__text");
      const $cardImage = $card.find(".card__img");
      const $popup = $card.find(".pop-up");

      $popup.toggle(".hidden");
      $cardDescription.toggle(".hidden");
      $cardImage.toggle(".hidden");

      if (this.innerText == "Read more") {
        this.innerText = "Close";
      } else if (this.innerText == "Close") {
        this.innerText = "Read more";
      }
    });
  }
}
const popUp = new PopUp();
