export default function setCaret(node, offset) {
  if(node.nodeName === "P" || node.nodeName === "LI"){
    
  }
  var ce = document.getElementById("#ce");
  var range = document.createRange();
  var sel = window.getSelection();

  range.setStart(node, offset);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
}