const particles = new Particles;


particles.createBubbles();

$(window).on('scroll', () => {
  const $win = $(window);
  const windowHeight = $win.height();

  $('.toAnim').each(function() {
    const $this = $(this);
    const elementOffset = $this.offset().top;
    const scrollPosition = $win.scrollTop();

    // Calculate the position relative to the bottom of the viewport
    const distanceFromBottom = scrollPosition + windowHeight;

    // Check if the element is within 70% of the viewport height from the bottom
    if (elementOffset < distanceFromBottom - windowHeight * 0.2) {
      $this.addClass('anim');
    }
  });
});