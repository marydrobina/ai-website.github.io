class Particles {
  constructor() {
    this.bubbleLifeTime = 20;
    this.noOfBubbles = 150;
    this.container = $('.all-circles-container');
  }

  createBubbles() {
    for (let i = 0; i < this.noOfBubbles; i++) {
      const bubble = this.#createBubble();
      this.container.append(bubble);
    }
  }

  #createBubble() {
    const circleContainer = $('<div></div>').addClass('circle_container');
    circleContainer.css('transform', `rotate(${Math.floor(Math.random() * 360)}deg)`);

    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
                            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    const randomTop = `${Math.floor(Math.random() * height)}px`;
    const randomLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;

    circleContainer.css('top', randomTop);
    circleContainer.css('left', randomLeft);

    const circle = this.#createCircle();
    circleContainer.append(circle);

    return circleContainer;
  }

  #createCircle() {
    const circle = $('<div></div>').addClass('circle');
    circle.css('animation-delay', `${Math.random() * this.bubbleLifeTime / 2}s`);

    const side = `${8 + Math.floor(Math.random() * 5)}px`;
    circle.css('width', side);
    circle.css('height', side);

    return circle;
  }
}
