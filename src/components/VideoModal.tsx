import { useState } from "react";
import {
  Box,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";
import ModalComponent from "./Modal";
import useNotification from "../utils/useNotifications";

type Props = {
  onClose: () => void;
  onEmbed: (props: { link: string; type: string }) => void;
  isOpen: boolean;
};

const VideoModal = (props: Props) => {
  const toast = useNotification();
  const [videoProps, setVideoProps] = useState({ type: "", link: "" });

  return (
    <ModalComponent
      onOk={() => {
        if (
          videoProps.type === "youtube" &&
          !videoProps.link.startsWith("https://www.youtube.com/embed/")
        ) {
          toast({
            description: "URL must start with : https://www.youtube.com/embed/",
            status: "error",
            title: "Broken URL",
          });
          return;
        }

        if (
          videoProps.type === "vimeo" &&
          !videoProps.link.startsWith("https://player.vimeo.com/video/")
        ) {
          toast({
            description:
              "URL must start with : https://player.vimeo.com/video/",
            status: "error",
            title: "Broken URL",
          });
          return;
        }
        if (videoProps.type !== "youtube" && videoProps.type !== "vimeo") {
          toast({
            description: "Please select a video type",
            status: "error",
            title: "Invalid Video type",
          });
          return;
        }
        props.onEmbed(videoProps);
      }}
      size="lg"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <Box>
        <label>
          <span>
            <Text mb={1} variant="smallLight">
              Video Provider
            </Text>
          </span>
          <Select
            value={videoProps.type}
            onChange={(event) => {
              setVideoProps((props) => ({
                ...props,
                type: event.target.value,
              }));
            }}
            placeholder="Select option"
            defaultValue="youtube"
          >
            <option value="youtube">Youtube</option>
            <option value="vimeo">Vimeo</option>
          </Select>
        </label>
        <label>
          <span>
            <Text mb={1} mt={3} variant="smallLight">
              URL
            </Text>
          </span>
          <Input
            value={videoProps.link}
            placeholder="url"
            onChange={(event) => {
              setVideoProps((props) => ({
                ...props,
                link: event.target.value,
              }));
            }}
          />
        </label>
      </Box>
    </ModalComponent>
  );
};

export default VideoModal;
