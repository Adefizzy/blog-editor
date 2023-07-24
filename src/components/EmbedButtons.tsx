import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import EmbedMenuItem from "./EmbedMenuItem";
import { BsFillImageFill } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import { RiBubbleChartFill } from "react-icons/ri";

type Props = {
  onEmbed: (title: string) => void;
};

const embedObject = [
  {
    title: "Picture",
    desc: "Jpeg, png",
    icon: BsFillImageFill,
  },
  {
    title: "Video",
    desc: "Embed a YouTube video",
    icon: TiVideo,
  },
  {
    title: "Social",
    desc: "Embed a Facebook link",
    icon: RiBubbleChartFill,
  },
];

export const EmbedButtons = ({ onEmbed }: Props) => {
  return (
    <Box mt={3}>
      <Menu>
        <MenuButton
          as={IconButton}
          isRound={true}
          icon={<AiOutlinePlus />}
          variant="noBg"
          size="sm"
        />

        <MenuList>
          <Box px={3}>
            <Text fontSize="sm" fontWeight="400">
              EMBEDS
            </Text>
          </Box>
          {embedObject.map((embed) => (
            <EmbedMenuItem
              onClick={() => onEmbed(embed.title)}
              key={embed.title}
              {...embed}
            />
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
