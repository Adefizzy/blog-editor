import { EditorState } from "draft-js";

const getTotalWords = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const plainText = contentState.getPlainText("");
  const words = plainText
    .trim()
    .split(/\s+/)
    .filter((word) => word);


  return words.length;
};

export default getTotalWords;
