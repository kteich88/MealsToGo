import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Zocial,
  Ionicons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export type IconNames =
  | keyof typeof AntDesign.glyphMap
  | keyof typeof Entypo.glyphMap
  | keyof typeof EvilIcons.glyphMap
  | keyof typeof Feather.glyphMap
  | keyof typeof FontAwesome.glyphMap
  | keyof typeof FontAwesome5.glyphMap
  | keyof typeof Fontisto.glyphMap
  | keyof typeof Foundation.glyphMap
  | keyof typeof Ionicons.glyphMap
  | keyof typeof Octicons.glyphMap
  | keyof typeof Zocial.glyphMap
  | keyof typeof SimpleLineIcons.glyphMap
  | keyof typeof MaterialIcons.glyphMap
  | keyof typeof MaterialCommunityIcons.glyphMap;
