function updateText(){
    // CODE GOES HERE
    //console.log("working");(it's showing it's working in the DOM)
    let text = document.getElementById('text-input').value; 
    document.getElementById('text-output').innerText = text;
  }
  
  function makeBold(elem){
    
    //console.log(elem);
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
  function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
 
  function makeUnderline(elem){
  
    /*                            (easy way out)
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
                                (Below hard wayout)    */      
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    if (formattedText.classList.contains('underline')){
      formattedText.classList.remove('underline');
    } else {
      formattedText.classList.add('underline')
      }
    }
    
  
  
  function alignText(elem, alignType){
    elem.classList.toggle('active');
    // console.log(alignType)
    document.getElementById('text-output').style.textAlign = alignType;
    let butttonslist = document.getElementsByClassName('align');
    for(let i = 0; i < butttonslist.length; i++){
      butttonslist[i].classList.remove('active');
    }
    elem.classList.add('active')
  }