import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  top: 525px;
  left: 140px;
`;
