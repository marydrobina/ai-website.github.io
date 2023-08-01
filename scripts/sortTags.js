function SortTags(){

  let toolsHidden = [];

  this.sortTags = function(){
    $('.filter p').on('click', function()
      { 
        filterTools($(this)[0].innerText)
      }
    )

  }
  
  function getListsOfTags() {
    const $tools = $('.tool')
    const $tags = $('.tool__description__tags')
    const listsOfTags = [];
    for (let i = 0; i < $tools.length; i++) {
      const listOfTags = ($tags[i].innerText).split(/\r?\n/).filter((str) => (str !== '')&&(str !== 'Tags'));
      listsOfTags.push(listOfTags);
    }
    return listsOfTags;
  }

  function filterTools(category){
    const listsOfTags = getListsOfTags();
    const $tools = $('.tool')
    for (let i = 0; i < $tools.length; ++i) {
      console.log($tools[i])
      if (listsOfTags[i].includes(category)) {
        $tools[i].style.display = 'inline'
        $tools[i].style.opacity = '1';
      } else {
        $tools[i].style.display = 'none';
        toolsHidden.push({tool: $tools[i], tags: listsOfTags[i]});
      }
    }
    const newToolsHidden = [];
    for (const toolData of toolsHidden) {
      if (toolData.tags.includes(category)) {
        toolData.tool.style.display = 'inline'
        toolData.tool.style.opacity = '1';
      } else {
        newToolsHidden.push(toolData);
      }
    }
    toolsHidden = newToolsHidden;
  }

}

const sort = new SortTags();
sort.sortTags();