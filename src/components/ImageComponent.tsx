import { Box, Image } from "@chakra-ui/react";

type Props = { path: string };

export const ImageComponent = ({ path }: Props) => {
  return (
    <Box width="100%">
      <Image width="100%" src={path} alt="Dan Abramov" />
    </Box>
  );
};
