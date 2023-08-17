// Create instances of Particles and PopUp classes
const particles = new Particles();
const popUp = new PopUp();

// Execute code when the window finishes loading
$(window).on("load", () => {
  // Generate bubbles using the Particles instance
  particles.createBubbles();
  popUp.togglePopUp();

  // Add scroll event listener
  $(window).on("scroll", () => {
    const $win = $(window);
    const windowHeight = $win.height();

    // Apply animation to elements with class "toAnim"
    $(".toAnim").each(function () {
      const $this = $(this);
      const elementOffset = $this.offset().top;
      const scrollPosition = $win.scrollTop();
      const distanceFromBottom = scrollPosition + windowHeight;

      // Add "anim" class to trigger animations
      if (elementOffset < distanceFromBottom - windowHeight * 0.2) {
        $this.addClass("anim");
      }
    });
  });

  // Add click event listener to filter buttons
  $(".filter").on("click", function () {
    if (this.parentElement.parentElement.id == "tools-section") {
      const filterTools = new ToolsFilter("tool");
      filterTools.filter(this);
    } else if (this.parentElement.parentElement.id == "jobs-section") {
      const filterJobs = new ToolsFilter("job");
      filterJobs.filter(this);
    }
  });

  // Add click event listener to navigation icon
  $(".icon").on("click", () => {
    let nav = document.querySelector("#main-navigation");
    nav.classList.toggle("responsive");
  });
});
