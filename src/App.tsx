import React, { useEffect, useCallback } from "react";
import theme from "./theme";
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Center,
  Divider,
  Heading,
  Flex,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ImageModal from "./components/ImageModal";


import {
  Editor,
  EditorState,
  RichUtils,
  DraftEditorCommand,
  ContentBlock,
  DraftStyleMap,
  CompositeDecorator,
} from "draft-js";
import "draft-js/dist/Draft.css";
import LinkModal from "./components/LinkModal";
import { alignments, boldItalic, linkImage, listIndent } from "./utils/helpers";
import findLinkEntities from "./utils/URLLinkStrategy";
import URLLink from "./components/URLLinkComponent";
import getTotalWords from "./utils/getTotalWords";
import handleStyleFormating from "./utils/handleStyleFormating";
import TextFormatingIcon from "./components/TextFormatingButton";
import useBlockRenderer from "./utils/useBlockRenderer";
import useInsertImage from "./utils/useInsertImage";
import useInsertLink from "./utils/useInsertLink";
import FormattingBar from "./components/FormattingBar";

export function App() {
  const {
    onClose: onCloseImageUpload,
    onOpen: onOpenImageUpload,
    isOpen: isOpenImageUpload,
  } = useDisclosure();

  const {
    onClose: onCloseLinkModal,
    onOpen: onOpenLinkModal,
    isOpen: isOpenLinkModal,
  } = useDisclosure();

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: URLLink,
    },
  ]);

  let editorRef: any;
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(decorator)
  );

  const focus = useCallback(() => {
    if (editorRef) editorRef.focus();
  }, [editorRef]);

  const modifyInlineContent = (styleType: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, styleType));
    focus();
  };

  const modifyBlockContent = (styleType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, styleType));
  };

  const aligns = alignments.map((el) => {
    return (
      <TextFormatingIcon
        onClick={(styleType) =>
          handleStyleFormating({
            styleType,
            modifyInlineContent,
            modifyBlockContent,
            onOpenImageUpload,
            onOpenLinkModal,
          })
        }
        key={el.name}
        {...el}
      />
    );
  });
  const linkImageList = linkImage.map((el) => {
    return (
      <TextFormatingIcon
        onClick={(styleType) =>
          handleStyleFormating({
            styleType,
            modifyInlineContent,
            modifyBlockContent,
            onOpenImageUpload,
            onOpenLinkModal,
          })
        }
        key={el.name}
        {...el}
      />
    );
  });
  const boldItalicList = boldItalic.map((el) => {
    return (
      <TextFormatingIcon
        onClick={(styleType) =>
          handleStyleFormating({
            styleType,
            modifyInlineContent,
            modifyBlockContent,
            onOpenImageUpload,
            onOpenLinkModal,
          })
        }
        key={el.name}
        {...el}
      />
    );
  });
  const listIndentList = listIndent.map((el) => {
    return (
      <TextFormatingIcon
        onClick={(styleType) =>
          handleStyleFormating({
            styleType,
            modifyInlineContent,
            modifyBlockContent,
            onOpenImageUpload,
            onOpenLinkModal,
          })
        }
        key={el.name}
        {...el}
      />
    );
  });

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  function myBlockStyleFn(contentBlock: ContentBlock) {
    switch (contentBlock.getType()) {
      case "blockquote":
        return "block-quote";
      case "left":
        return "align-left";
      case "center":
        return "align-center";
      case "right":
        return "align-right";
      default:
        return "";
    }
  }

  const styleMap: DraftStyleMap = {
    CENTER_ALIGNMENT: {
      textAlign: "center",
    },
    LEFT_ALIGNMENT: {
      textAlign: "left",
    },
    RIGHT_ALIGNMENT: {
      textAlign: "right",
    },
  };

  const setDomEditorRef = (ref: any) => (editorRef = ref);

  const insertImage = useInsertImage(
    editorState,
    setEditorState,
    onCloseImageUpload
  );

  useEffect(() => {
    setTimeout(() => {
      focus();
    }, 0);
  }, [editorState, focus]);

  const insertLink = useInsertLink(
    editorState,
    setEditorState,
    onCloseLinkModal
  );

  const myBlockRenderer = useBlockRenderer();

  return (
    <ChakraProvider theme={theme}>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem bg="RGBA(0, 0, 0, 0.04)" colSpan={5}>
          <Center flexDirection="column" minH="100vh">
            <Box
              display="flex"
              width={{ base: "90%", lg: "50%" }}
              border="1px solid #E2E8F0"
              minH="80vh"
              borderRadius="sm"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Box>
                <Divider mt={10} />
                <Box p={4}>
                  <Heading size="md" as="h1">
                    This is the title
                  </Heading>
                  <FormattingBar
                    linkImageList={linkImageList}
                    aligns={aligns}
                    boldItalicList={boldItalicList}
                    listIndentList={listIndentList}
                  />
                  <Box>
                    <Editor
                      placeholder="Add content"
                      ref={setDomEditorRef}
                      editorState={editorState}
                      onChange={setEditorState}
                      handleKeyCommand={handleKeyCommand}
                      blockStyleFn={myBlockStyleFn}
                      customStyleMap={styleMap}
                      blockRendererFn={myBlockRenderer}
                    />
                  </Box>
                </Box>
              </Box>
              <Flex
                justifyContent="flex-end"
                p={2}
                w="100%"
                borderTop="1px solid #E2E8F0"
                bg="white"
              >
                <Text fontSize="xs">
                  {getTotalWords(editorState)}/1000 words
                </Text>
              </Flex>
            </Box>
            <Flex
              mt="2"
              justifyContent="flex-end"
              width={{ base: "90%", lg: "50%" }}
            >
              <Button>Post</Button>
            </Flex>
          </Center>
          <ImageModal
            onClose={onCloseImageUpload}
            isOpen={isOpenImageUpload}
            onEmbed={insertImage}
          />
          <LinkModal
            onClose={onCloseLinkModal}
            isOpen={isOpenLinkModal}
            onEmbed={insertLink}
          />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}


