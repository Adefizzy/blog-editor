import { MenuItem, Flex, Icon, Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  desc: string;
  icon: IconType;
  onClick?: () => void;
}

export default function EmbedMenuItem({ title, desc, icon, onClick }: Props) {
  return (
    <MenuItem
      _hover={{
        bgColor: "lightGreen",
      }}
      my={4}
      onClick={onClick}
    >
      <Flex alignItems="flex-start">
        <Icon as={icon} boxSize={5} />

        <Box ml={4} height="fit-content">
          <Text lineHeight="none" variant="smallBoldNormal">
            {title}
          </Text>
          <Text mt={1} fontWeight="light" fontSize="xs">
            {desc}
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  );
}
