import { EmotionCache } from "@emotion/react";
import type { AppProps as DefaultAppProps } from "next/app";

interface AppProps extends DefaultAppProps {
  emotionCache?: EmotionCache | undefined;
}

export default AppProps;
