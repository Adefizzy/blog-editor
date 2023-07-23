import { useRef, useState, FormEvent } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import ModalComponent from "./Modal";
import Clickable from "./Clickable";
import { ImageComponent } from "./ImageComponent";

type Props = {
  onClose: () => void;
  onEmbed: (path: string) => void;
  isOpen: boolean;
};
const ImageModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [path, setPath] = useState("");

  const handleImageImport = () => {
    inputRef?.current?.click();
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget?.files![0];
    const path = URL.createObjectURL(file);
    setPath(path);
    e.currentTarget.value = "";
    setTimeout(() => inputRef?.current?.focus(), 0);
  };

  return (
    <ModalComponent
      onOk={() => {
        props.onEmbed(path);
        setPath("");
      }}
      size="lg"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <Box>
        <Text>Upload Image</Text>
        <Text my={3} variant="smallLight">
          File Upload
        </Text>
        <Center
          py={10}
          border="1px dashed"
          borderColor="primary"
          w="100%"
          h="70%"
          borderRadius="sm"
        >
          {!path && (
            <Clickable onClick={handleImageImport}>
              <Box
                border="1px solid"
                borderColor="primary"
                p={1}
                borderRadius="sm"
              >
                <Text variant="smallLight">Import Image from Device</Text>
              </Box>
            </Clickable>
          )}
          {path && (
            <Clickable onClick={handleImageImport}>
              <ImageComponent path={path} />
            </Clickable>
          )}
          <Box display="none">
            <input ref={inputRef} type="file" onChange={handleInputChange} />
          </Box>
        </Center>
      </Box>
    </ModalComponent>
  );
};

export default ImageModal;
