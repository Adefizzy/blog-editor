import { Link } from "@chakra-ui/react";
import { ContentState } from "draft-js";

const URLLink = (props: {
    children: React.ReactNode;
    contentState: ContentState;
    entityKey: string;
  }) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return <Link href={url} color='teal.500' target="_blank">{props.children}</Link>;
  };

  export default URLLink;