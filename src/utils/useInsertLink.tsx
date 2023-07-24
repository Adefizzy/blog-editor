import { EditorState, RichUtils } from "draft-js";
import { useCallback } from "react";

function useInsertLink(
    editorState: EditorState,
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
    onCloseLinkModal: () => void
  ) {
    return useCallback(
      (url: string) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          "LINK",
          "MUTABLE",
          { url }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {
          currentContent: contentStateWithEntity,
        });
  
        setEditorState(
          RichUtils.toggleLink(
            newEditorState,
            newEditorState.getSelection(),
            entityKey
          )
        );
  
        onCloseLinkModal();
      },
      [editorState, onCloseLinkModal, setEditorState]
    );
  }

  export default useInsertLink;