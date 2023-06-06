const getCaret = (e) => {
  let _range = document.getSelection().getRangeAt(0);
  let range = _range.cloneRange();
  range.selectNodeContents(e.target);
  range.setEnd(_range.endContainer, _range.endOffset);
  let leaf = _range.endContainer;
  if(leaf.nodeType === 3){
    leaf = leaf.parentNode;
  }
  return [leaf, _range.endOffset]
};

export default getCaret