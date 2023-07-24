import { Image, Box } from "@chakra-ui/react";

type Props = {
 src: string
}

const ImageRenderer = (props: Props) => {


  return (
    <Box width="100%" height="40vh">
      <Image
        objectFit="contain"
        width="100%"
        height="40vh"
        src={props.src}
        alt="Dan Abramov"
      />
    </Box>
  );
};

export default ImageRenderer;
