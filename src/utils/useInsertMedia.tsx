import { EditorState, AtomicBlockUtils } from "draft-js";
import { useCallback } from "react";

function useInsertMedia(
  editorState: EditorState,
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
  onCloseModal: () => void
) {
  return useCallback(
    ({ link, type }: { link: string; type: string }) => {

      let contentState = editorState.getCurrentContent();

      const contentStateWithEntity = contentState.createEntity(
        "atomic",
        "IMMUTABLE",
        {
          src: link,
          type
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

      onCloseModal();
    },
    [editorState, onCloseModal, setEditorState]
  );
}

export default useInsertMedia;
