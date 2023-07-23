import { Flex, Menu, MenuButton, Button, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";



export default function FormattingBar({
    linkImageList,
    aligns,
    boldItalicList,
    listIndentList,
  }: Record<string, React.ReactNode>) {
    return (
      <Flex
        alignItems="center"
        flexWrap="wrap"
        bg="white"
        width="fit-content"
        mt={5}
      >
        <Box p={1} borderRight="1px solid #E2E8F0">
          <Menu>
            <MenuButton
              variant="ghost"
              as={Button}
              rightIcon={<AiOutlineDown />}
              fontWeight="normal"
              size="sm"
            >
              Paragraph
            </MenuButton>
            <MenuList>
              <MenuItem>Paragraph</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box p={1} borderRight="1px solid #E2E8F0">
          {linkImageList}
        </Box>
        <Box p={1} borderRight="1px solid #E2E8F0">
          {aligns}
        </Box>
        <Box p={1} borderRight="1px solid #E2E8F0">
          {boldItalicList}
        </Box>
        <Box p={1}>{listIndentList}</Box>
      </Flex>
    );
  }