import * as React from "react";
import SocialLink from "../atoms/SocialLink";
import Stack, { StackProps } from "@mui/material/Stack";

interface SocialLinksProps extends StackProps {}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
  return (
    <Stack {...props}>
      <SocialLink
        tooltip={"Siguenos en Tiktok"}
        href={"https://www.tiktok.com/@o.can.de.quen"}
        src={"/tiktok.svg"}
        alt={"tiktok url"}
      />
      <SocialLink
        tooltip={"Siguenos en facebook"}
        href={"https://www.facebook.com/can.de.quen"}
        src={"/facebook.svg"}
        alt={"facebook url"}
      />
      <SocialLink
        tooltip={"Siguenos en instagram"}
        href={"https://www.instagram.com/o.can.de.quen"}
        src={"/instagram.svg"}
        alt={"instagram url"}
      />
    </Stack>
  );
};

export default SocialLinks;
