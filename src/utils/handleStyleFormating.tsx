import CONSTANTS from "./constants";

interface Props {
  styleType: string;
  modifyInlineContent: (val: string) => void;
  modifyBlockContent: (val: string) => void;
  onOpenImageUpload: () => void;
  onOpenLinkModal: () => void;
}

const handleStyleFormating = ({
  styleType,
  modifyInlineContent,
  modifyBlockContent,
  onOpenImageUpload,
  onOpenLinkModal,
}: Props) => {
  switch (styleType) {
    case CONSTANTS.BOLD:
      modifyInlineContent("BOLD");
      break;
    case CONSTANTS.ITALIC:
      modifyInlineContent("ITALIC");
      break;
    case CONSTANTS.ORDERED_LIST:
      modifyBlockContent("ordered-list-item");
      break;
    case CONSTANTS.UNORDERED_LIST:
      modifyBlockContent("unordered-list-item");
      break;
    case CONSTANTS.BLOCK_QUOTE:
      modifyBlockContent("blockquote");
      break;
    case CONSTANTS.LEFT_ALIGN:
      modifyBlockContent("left");
      break;
    case CONSTANTS.RIGHT_ALIGN:
      modifyBlockContent("right");
      break;
    case CONSTANTS.CENTER_ALIGN:
      modifyBlockContent("center");
      break;
    case CONSTANTS.IMAGE:
      onOpenImageUpload();
      break;
    case CONSTANTS.LINK:
      onOpenLinkModal();
      break;
    default:
      break;
  }
};

export default handleStyleFormating;
