/**
 * Class representing a pop-up toggle functionality.
 */
class PopUp {
  constructor() {}

  /**
   * Toggles the pop-up, card description, and card image visibility.
   * Updates the button text accordingly.
   * @public
   */
  togglePopUp() {
    const $popUpBtn = $(".pop-up-btn");

    $popUpBtn.on("click", function () {
      const $card = $(this).closest(".card");
      const $cardDescription = $card.find(".card__description__text");
      const $cardImage = $card.find(".card__img");
      const $popup = $card.find(".pop-up");

      // Toggle visibility of pop-up, card description, and card image
      $popup.toggleClass("hidden");
      $cardDescription.toggleClass("hidden");
      $cardImage.toggleClass("hidden");

      // Update button text based on state
      if (this.innerText == "Read more") {
        this.innerText = "Close";
      } else if (this.innerText == "Close") {
        this.innerText = "Read more";
      }
    });
  }
}
