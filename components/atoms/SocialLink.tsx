import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

interface SocialLinkProps {
  tooltip: string;
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { tooltip, href, src, alt, width = 20, height = 20 } = props;
  return (
    <Tooltip title={tooltip} placement={"top"}>
      <a target="_blank" rel="noreferrer" href={href}>
        <Image src={src} alt={alt} width={width} height={height} />
      </a>
    </Tooltip>
  );
};

export default SocialLink;
