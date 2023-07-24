import { useToast } from "@chakra-ui/react";

type statusType =
  | "error"
  | "loading"
  | "info"
  | "warning"
  | "success"
  | undefined;
type propsType = "description" | "title" | "status";

const useNotification = () => {
  const toast = useToast();
  return (props: Record<propsType, string>) =>
    toast({
      title: props.title,
      description: props.description,
      status: props.status as statusType,
      duration: 3000,
      isClosable: true,
      position: "top",
    });
};

export default useNotification;
