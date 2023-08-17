/**
 * Class representing a particle system of bubbles.
 */
class Particles {
  /**
   * Constructs a Particles instance.
   */
  constructor() {
    // The lifetime of bubbles in seconds
    this.bubbleLifeTime = 20;

    // Number of bubbles to create
    this.noOfBubbles = 150;

    // The container to hold all bubbles
    this.container = $(".all-circles-container");
  }

  /**
   * Creates bubbles and appends them to the container.
   */
  createBubbles() {
    for (let i = 0; i < this.noOfBubbles; i++) {
      const bubble = this.#createBubble();
      this.container.append(bubble);
    }
  }

  /**
   * Creates a single bubble element.
   * @private
   * @returns {jQuery} The jQuery-wrapped bubble element.
   */
  #createBubble() {
    // Create a container for the bubble
    const circleContainer = $("<div></div>").addClass("circle_container");

    // Rotate the bubble container randomly
    circleContainer.css(
      "transform",
      `rotate(${Math.floor(Math.random() * 360)}deg)`
    );

    // Calculate the maximum height of the document
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    // Set random top and left positions for the bubble
    const randomTop = `${Math.floor(Math.random() * height)}px`;
    const randomLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;
    circleContainer.css("top", randomTop);
    circleContainer.css("left", randomLeft);

    // Create the circle element within the bubble container
    const circle = this.#createCircle();
    circleContainer.append(circle);

    return circleContainer;
  }

  /**
   * Creates a single circle element with animation properties.
   * @private
   * @returns {jQuery} The jQuery-wrapped circle element.
   */
  #createCircle() {
    // Create the circle element
    const circle = $("<div></div>").addClass("circle");

    // Set animation delay for bubble appearance
    circle.css(
      "animation-delay",
      `${(Math.random() * this.bubbleLifeTime) / 2}s`
    );

    // Set random width and height for the circle
    const side = `${8 + Math.floor(Math.random() * 5)}px`;
    circle.css("width", side);
    circle.css("height", side);

    return circle;
  }
}
