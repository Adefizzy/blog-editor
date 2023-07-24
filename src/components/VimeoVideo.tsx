import { Box } from "@chakra-ui/react";
type Props = {
  src: string;
};

const VimeoVideo = (props: Props) => {
    return (
      <Box width="100%" height="40vh">
        <iframe
          width="100%"
          height="100%"
          src={props.src}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video player"
        ></iframe>
      </Box>
    );
  };


  export default VimeoVideo;