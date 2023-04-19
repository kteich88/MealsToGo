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
  const fontFamily = props?.fontFamily ?? FontFamily.default;

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
      fontWeight: FontWeight.bold,
      letterSpacing: 0,
      lineHeight: LineHeight.heading,
    },
    subheading: {
      color,
      fontFamily,
      fontSize: FontSize.subheading,
      fontWeight: FontWeight.semiBold,
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
    counter: {
      color,
      fontFamily: FontFamily.default,
      fontSize: FontSize.counter,
      fontWeight,
      letterSpacing: 0,
    },
  };
};
