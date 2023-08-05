const particles = new Particles();;
particles.createBubbles();

function openMenu() {
  let nav = document.querySelector("#main-navigation");
  if (nav.className === "navigation") {
    nav.className += " responsive";
  } else {
    nav.className = "navigation";
  }
}
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

$('.filter').on('click', function()
      { 
        if (this.parentElement.parentElement.id == 'tools-section'){
          const filterTools = new ToolsFilter('tool');
          filterTools.filter(this)
        } else if (this.parentElement.parentElement.id == 'jobs-section'){
            const filterJobs = new ToolsFilter('job');
            filterJobs.filter(this)
        }
      }
    )





