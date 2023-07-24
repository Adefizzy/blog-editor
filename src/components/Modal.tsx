import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: string;
  onOk: () => void;

};
 const ModalComponent = (
  props: Props
)  => {
 
  return (
    <Modal
    
      size={props?.size ?? "md"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="left">Embed</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="70vh" overflow="auto">
          {props.children}
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Button disabled onMouseDown={props.onOk} mr={3}>
            Embed
          </Button>
          <Button onMouseDown={props.onClose} variant="noBg">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
