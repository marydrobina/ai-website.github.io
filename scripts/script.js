const particles = new Particles();

$(window).on("load", () => {
  particles.createBubbles();

  $(window).on("scroll", () => {
    const $win = $(window);
    const windowHeight = $win.height();

    $(".toAnim").each(function () {
      const $this = $(this);
      const elementOffset = $this.offset().top;
      const scrollPosition = $win.scrollTop();
      const distanceFromBottom = scrollPosition + windowHeight;

      if (elementOffset < distanceFromBottom - windowHeight * 0.2) {
        $this.addClass("anim");
      }
    });
  });

  $(".filter").on("click", function () {
    if (this.parentElement.parentElement.id == "tools-section") {
      const filterTools = new ToolsFilter("tool");
      filterTools.filter(this);
    } else if (this.parentElement.parentElement.id == "jobs-section") {
      const filterJobs = new ToolsFilter("job");
      filterJobs.filter(this);
    }
  });

  $(".icon").on("click", () => {
    let nav = document.querySelector("#main-navigation");
    nav.classList.toggle("responsive");
  });
});
