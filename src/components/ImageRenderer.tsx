// @flow
import { ContentBlock, ContentState } from "draft-js";
import * as React from "react";
import { ImageComponent } from "./ImageComponent";
type Props = {
  contentState: ContentState;
  block: ContentBlock;
  blockProps: Record<string, any>;
};
 const ImageRenderer = (props: Props) => {

  const { block, contentState } = props;
  const data = contentState.getEntity(block.getEntityAt(0)).getData();

  return <ImageComponent path={data.src} />;
};

export default ImageRenderer;
