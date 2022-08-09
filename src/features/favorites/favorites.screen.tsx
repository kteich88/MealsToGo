import React from "react";
import { SafeArea } from "../../components/SafeArea/SafeArea.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface FavoritesScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({}) => {
  return <SafeArea></SafeArea>;
};
