import getCaret from "./getCaret";

const getCaretPath = (e) => {
  const [leaf, offset] = getCaret(e)
  const path = getNodePath(leaf, e.target);
  path.push(["off", _range.endOffset]);
  
  return path;
};

export default getCaretPath