import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { Text } from "react-native";
import { CameraButton, CameraContainer, ProfileCamera } from "./camera.styles";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef<Camera | null>();

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      return photo;
    }
  };

  useEffect(() => {
    (async () => {
      const { granted } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"16:9"}
        type={CameraType.front}
        onCameraReady={() => {
          console.log("Camera Ready");
        }}
      />

      <CameraButton onPress={() => snap()}>Snap!</CameraButton>
    </CameraContainer>
  );
};

export default CameraScreen;
