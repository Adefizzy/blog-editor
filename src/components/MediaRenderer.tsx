import { ContentBlock, ContentState } from "draft-js";
import  YoutubeVideo  from "./YoutubeVideo";
import VimeoVideo from './VimeoVideo';
import ImageRenderer from "./ImageRenderer";

type Props = {
  contentState: ContentState;
  block: ContentBlock;
  blockProps: Record<string, any>;
};

export const MediaRenderer = (props: Props) => {
  const { block, contentState } = props;
  const data = contentState.getEntity(block.getEntityAt(0)).getData();

  if (data.type === "youtube") {
    return <YoutubeVideo src={data.src} />;
  }

  if (data.type === "vimeo") {
    return <VimeoVideo src={data.src} />;
  }
  return <ImageRenderer src={data.src} />;
};
