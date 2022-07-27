export * from "./colors";
export * from "./spacing";
export * from "./sizes";
export * from "./fonts";

import { colors } from "./colors";
import { spacing, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  colors,
  spacing,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
