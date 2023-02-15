import React, { useContext } from "react";
import { Pressable } from "react-native";
import Icon from "components/Icons/Icon";
import { styles } from "./index.styles";
import { theme } from "infrastructure/theme";
import { useVoice } from "hooks/useVoice";

const VoiceIcon: React.FC = () => {
  const { isRecording, onRecordVoice, onVoiceDestroy } = useVoice();
  return (
    <Pressable onPress={onRecordVoice}>
      <Icon
        type={"FontAwesome"}
        name={isRecording ? "microphone-slash" : "microphone"}
        color={theme.colors.midGray}
        size={theme.spacing.md}
      />
    </Pressable>
  );
};

export default VoiceIcon;
