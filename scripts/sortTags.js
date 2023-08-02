function SortTags(){

  this.sortTags = function(){
    $('.filter').on('click', function()
      { 
        filterTools($(this)[0].innerText)
      }
    )
  }
  
  function getListsOfTags() {
    const $tags = $('.tags')
    const $toolsNames = $('.tool__description__text h3')
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
    const $toolsNames = $('.tool__description__text h3')
    for (let i = 0; i < $toolsNames.length; ++i) {
      const currentToolName = $toolsNames[i].innerText;
      const $currentTool = $($toolsNames[i].parentElement.parentElement.parentElement);
      if (listsOfTags[currentToolName].includes(category)) {
        $currentTool.css('display','inline-block')
        $currentTool.css('opacity', '1');
        $($currentTool).addClass('fadeInBoottom')
      } else if(category == 'All') {
        resetToolsDisplay();
      } else {
        $currentTool.css('display','none')
      }
    }
  }

  function resetToolsDisplay() {
    const $tools = $('.tool');
    $tools.css('display', 'inline');
    $tools.css('opacity', '1');
    $tools.removeClass('toAnim')
  }
}