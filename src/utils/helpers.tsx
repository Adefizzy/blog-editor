import {
    AiOutlineAlignCenter,
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineLink,
    AiOutlineOrderedList,
    AiOutlineUnorderedList,
    AiOutlineDown,
  } from "react-icons/ai";
  
  import { BsFillImageFill, BsBlockquoteLeft } from "react-icons/bs";
  import { FaItalic } from "react-icons/fa";
  import { ImBold } from "react-icons/im";

  import CONSTANTS from "./constants";

export const alignments = [
    { name: CONSTANTS.LEFT_ALIGN, icon: <AiOutlineAlignLeft /> },
    { name: CONSTANTS.RIGHT_ALIGN, icon: <AiOutlineAlignRight /> },
    { name: CONSTANTS.CENTER_ALIGN, icon: <AiOutlineAlignCenter /> },
  ];
  
export const boldItalic = [
    { name: CONSTANTS.BOLD, icon: <ImBold /> },
    { name: CONSTANTS.ITALIC, icon: <FaItalic /> },
  ];
  
export const linkImage = [
    { name: CONSTANTS.LINK, icon: <AiOutlineLink /> },
    { name: CONSTANTS.IMAGE, icon: <BsFillImageFill /> },
  ];
  
export const listIndent = [
    { name: CONSTANTS.ORDERED_LIST, icon: <AiOutlineOrderedList /> },
    { name: CONSTANTS.UNORDERED_LIST, icon: <AiOutlineUnorderedList /> },
    { name: CONSTANTS.BLOCK_QUOTE, icon: <BsBlockquoteLeft /> },
  ];