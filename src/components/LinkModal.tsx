import { useRef, useState, FormEvent } from "react";
import { Box, Text, Center, Input } from "@chakra-ui/react";
import ModalComponent from "./Modal";


type Props = {
  onClose: () => void;
  onEmbed: (path: string) => void;
  isOpen: boolean;
};

const LinkModal = (props: Props) => {
  const [link, setLink] = useState("");

  return (
    <ModalComponent
      onOk={() => {
        props.onEmbed(link)
      }}
      size="lg"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <Box>
        <Text>Add Link</Text>
        <Text my={3} variant="smallLight">
          File Upload
        </Text>
        <Input
          type="url"
          value={link}
          onChange={(event) => {
            setLink(event.currentTarget.value);
          }}
        />
      </Box>
    </ModalComponent>
  );
};

export default LinkModal;
