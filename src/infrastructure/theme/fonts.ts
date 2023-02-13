import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from "./constants";
import { Fonts, TextProps } from "./types";

export const fonts = (props?: TextProps): Fonts => {
  const fontWeight = props?.fontWeight ?? FontWeight.medium;
  const color = props?.color ?? Colors.black;
  const textDecorationLine = props?.textDecorationLine ?? "none";
  const fontFamily = props?.fontFamily ?? FontFamily.monospace;

  return {
    bodyText: {
      color,
      fontFamily,
      fontSize: FontSize.bodyText,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.bodyText,
      textDecorationLine,
    },
    heading: {
      color,
      fontFamily,
      fontSize: FontSize.heading,
      fontWeight: "800",
      letterSpacing: 0,
      lineHeight: LineHeight.heading,
    },
    subheading: {
      color,
      fontFamily,
      fontSize: FontSize.subheading,
      fontWeight: "800",
      letterSpacing: -2,
      lineHeight: LineHeight.subheading,
    },
    caption: {
      color,
      fontFamily,
      fontSize: FontSize.caption,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.caption,
    },
  };
};
