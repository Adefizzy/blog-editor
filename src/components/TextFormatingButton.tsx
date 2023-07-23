import { Tooltip, IconButton } from "@chakra-ui/react";

const TextFormatingIcon = ({
    icon,
    name,
    onClick,
  }: {
    icon: React.ReactElement;
    name: string;
    onClick: (styleType: string) => void;
  }) => {
    return (
      <Tooltip label={name}>
        <IconButton
          onMouseDown={(e) => {
            e.preventDefault();
            onClick(name);
          }}
          // onClick={() => onClick(name)}
          variant="ghost"
          aria-label="Send email"
          size="sm"
          icon={icon}
          bgColor="#E7F1E9"
          mr={1}
        />
      </Tooltip>
    );
  };

  export default TextFormatingIcon;