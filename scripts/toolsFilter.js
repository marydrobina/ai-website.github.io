function ToolsFilter(entity, path){

  this.filter = function(button){
    filterTools($(button)[0].innerText)
  }
  
  function getListsOfTags() {
    const $tags = $('.tags');
    const $toolsNames = $(`.${entity}__description__text`).find('h3');
    const tagsList = {};
    for(let i = 0; i < $tags.length; i++){
      const currentTool = $toolsNames[i].innerText;
      tagsList[currentTool] = []
      for (let tag of $tags[i].children) {
        
        tagsList[currentTool].push(tag.innerText)
      };
    }
    return tagsList;
  }

  function filterTools(category){
    resetToolsDisplay();
    const listsOfTags = getListsOfTags();
    const $toolsNames = $(`.${entity}__description__text`).find('h3');
    for (let i = 0; i < $toolsNames.length; ++i) {
      const currentToolName = $toolsNames[i].innerText;
      let $currentTool;
      if(entity == 'tool'){
        $currentTool = $($toolsNames[i].parentElement.parentElement.parentElement);
      } else if(entity == 'job'){
        $currentTool = $($toolsNames[i].parentElement.parentElement.parentElement.parentElement)
      }
      console.log(currentToolName)
      if (listsOfTags[currentToolName].includes(category)) {
        $currentTool.css('display','flex')
        $currentTool.css('opacity', '1');
        $currentTool.css('animation', 'none');
      } else if(category == 'All') {
        resetToolsDisplay();
      } else {
        $currentTool.css('display','none')
      }
    }
  }

  function resetToolsDisplay() {
    const $tools = $(`.${entity}`);
    $tools.css('display', 'flex');
    $tools.css('opacity', '1');
  }
}