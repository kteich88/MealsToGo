import { TextStyle } from "react-native";
import {
  Colors,
  FontFamily,
  FontWeight,
  TextDecorationLine,
} from "./constants";

export interface TextProps {
  fontWeight?: FontWeight;
  color?: Colors;
  textDecorationLine?: TextDecorationLine;
  fontFamily?: FontFamily;
}

export interface Fonts {
  bodyText: TextStyle;
  heading: TextStyle;
  subheading: TextStyle;
  caption: TextStyle;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Radius {
  sm: number;
  md: number;
  lg: number;
}
