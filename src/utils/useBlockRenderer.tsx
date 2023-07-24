import { ContentBlock } from "draft-js";
import { useCallback } from "react";
import { MediaRenderer } from "../components/MediaRenderer";

function useBlockRenderer() {
  return useCallback((contentBlock: ContentBlock) => {
    const type = contentBlock.getType();
    if (type === "atomic") {
      return {
        component: MediaRenderer,
        editable: false,
      };
    }
  }, []);
}

export default useBlockRenderer;
