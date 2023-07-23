import { ContentBlock } from "draft-js";
import { useCallback } from "react";

import ImageRenderer from "../components/ImageRenderer";

function useBlockRenderer() {
    return useCallback((contentBlock: ContentBlock) => {
      const type = contentBlock.getType();
  
      if (type === "atomic") {
        return {
          component: ImageRenderer,
          editable: false,
          props: {
            foo: "bar",
          },
        };
      }
    }, []);
  }

  export default useBlockRenderer;