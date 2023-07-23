import { ContentBlock, ContentState } from "draft-js";

function findLinkEntities(
    contentBlock: ContentBlock,
    callback: (start: number, end: number) => void,
    contentState: ContentState
  ) {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
  
      console.log({entityKey})
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  }

  export default findLinkEntities;



