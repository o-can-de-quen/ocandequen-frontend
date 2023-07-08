import { Theme, SxProps } from "@mui/material";
import { SystemStyleObject } from "@mui/system";
import { alpha as alphaFn } from "@mui/material";

export type ComponentStyle = Record<string, SystemStyleObject<Theme>>;
export type IconifyStyle = Record<string, SxProps<{}> | undefined>;
export type Style = SystemStyleObject<Theme>;
export const alpha = alphaFn;
