/**
 * Class for filtering tools based on categories.
 */
class ToolsFilter {
  /**
   * Constructs a ToolsFilter instance.
   * @param {string} entity - The entity type to filter (tool or job).
   */
  constructor(entity) {
    this.entity = entity;
    this.filter = function (button) {
      this.#filterTools($(button)[0].innerText);
    };
  }

  /**
   * Retrieves lists of tags associated with tools.
   * @private
   * @returns {Object} An object containing tool names as keys and corresponding tag arrays as values.
   */
  #getListsOfTags() {
    const $tags = $(".tags");
    const $toolsNames = $(`.${this.entity}__description__text`).find("h3");
    const tagsList = {};
    for (let i = 0; i < $tags.length; i++) {
      const currentTool = $toolsNames[i].innerText;
      tagsList[currentTool] = [];
      for (let tag of $tags[i].children) {
        tagsList[currentTool].push(tag.innerText);
      }
    }
    return tagsList;
  }

  /**
   * Filters tools based on the selected category.
   * @private
   * @param {string} category - The category to filter by.
   */
  #filterTools(category) {
    this.#resetToolsDisplay();
    if (category.toLowerCase().trim() == "all") {
      return;
    }
    const listsOfTags = this.#getListsOfTags();
    const $toolsNames = $(`.${this.entity}__description__text`).find("h3");
    for (let i = 0; i < $toolsNames.length; ++i) {
      const currentToolName = $toolsNames[i].innerText;
      let $currentTool;
      if (this.entity == "tool") {
        $currentTool = $(
          $toolsNames[i].parentElement.parentElement.parentElement
        );
      } else if (this.entity == "job") {
        $currentTool = $(
          $toolsNames[i].parentElement.parentElement.parentElement.parentElement
        );
      }
      if (listsOfTags[currentToolName].includes(category)) {
        $currentTool.css("display", "flex");
        $currentTool.css("opacity", "1");
        $currentTool.css("animation", "none");
      } else {
        $currentTool.css("display", "none");
      }
    }
  }

  /**
   * Resets the display of tools to their default state.
   * @private
   */
  #resetToolsDisplay() {
    const $tools = $(`.${this.entity}`);
    $tools.css("display", "flex");
    $tools.css("opacity", "1");
  }
}
