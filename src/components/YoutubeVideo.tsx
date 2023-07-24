import { Box } from "@chakra-ui/react";
type Props = {
  src: string;
};

const YoutubeVideo = (props: Props) => {
  return (
    <Box width="100%" height="40vh">
      <iframe
        width="100%"
        height="100%"
        src={props.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};

export default YoutubeVideo;
