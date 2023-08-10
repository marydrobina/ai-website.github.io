export default class Particles {
  constructor() {
    const bubbleLifeTime = 20;
    const noOfBubbles = 150;
    const container = $('.all-circles-container');

    this.createBubbles = function () {
      for (let i = 0; i < noOfBubbles; i++) {
        const bubble = createBubble();
        container.append(bubble);
      }
    };

    function createBubble() {
      const circleContainer = $('<div></div>');
      circleContainer.addClass('circle_container');
      circleContainer.css('transform', `rotate(${Math.floor(Math.random() * 360)}deg)`);

      const body = document.body, html = document.documentElement;

      const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

      const randomTop = `${Math.floor(Math.random() * height)}px`;
      const randomLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;

      circleContainer.css('top', randomTop);
      circleContainer.css('left', randomLeft);

      const circle = createCircle();
      circleContainer.append(circle);

      return circleContainer;
    }

    function createCircle() {
      const circle = $('<div></div>');
      circle.addClass('circle');
      circle.css('animation-delay', `${Math.random() * bubbleLifeTime / 2}s`);

      const side = `${8 + Math.floor(Math.random() * 5)}px`;
      circle.css('width', side);
      circle.css('height', side);

      return circle;
    }
  }
}