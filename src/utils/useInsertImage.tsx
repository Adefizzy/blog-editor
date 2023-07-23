import { EditorState, AtomicBlockUtils } from "draft-js";
import { useCallback } from "react";

function useInsertImage(
  editorState: EditorState,
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
  onCloseImageUpload: () => void
) {
  return useCallback(
    (path: string) => {
      let contentState = editorState.getCurrentContent();

      const contentStateWithEntity = contentState.createEntity(
        "IMAGE",
        "IMMUTABLE",
        {
          src: path,
        }
      );

      const entityKey = contentState.getLastCreatedEntityKey();

      let newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });

      newEditorState = AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        " "
      );

      setEditorState(newEditorState);

      onCloseImageUpload();
    },
    [editorState, onCloseImageUpload]
  );
}

export default useInsertImage;
