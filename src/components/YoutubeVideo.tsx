import { Box } from "@chakra-ui/react";
type Props = {
  src: string;
};

export const YoutubeVideo = (props: Props) => {
  return (
    <Box width="100%" height="40vh">
      <iframe
        width="100%"
        height="100%"
        /* src="https://www.youtube.com/embed/PDdZB83_Nrs" */

        src={props.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};

export const VimeoVideo = (props: Props) => {
  return (
    <Box width="100%" height="40vh">
      <iframe
        width="100%"
        height="100%"
        // src="https://player.vimeo.com/video/524933864?h=1ac4fd9fb4&byline=0&portrait=0"
        src={props.src}
        allow="autoplay; fullscreen; picture-in-picture"
        title="Vimeo video player"
      ></iframe>
    </Box>
  );
};
