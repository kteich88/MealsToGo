import React, { useContext } from "react";
import { Pressable } from "react-native";
import Icon from "components/Icons/Icon";
import { styles } from "./index.styles";
import { theme } from "infrastructure/theme";
import { VoiceContext } from "contexts/voice.context";

const VoiceIcon: React.FC = () => {
  const { onRecordVoice, isRecording } = useContext(VoiceContext);

  return (
    <>
      <Pressable onPress={onRecordVoice}>
        <Icon
          style={styles.voice}
          type={"FontAwesome"}
          name={isRecording ? "microphone-slash" : "microphone"}
          color={theme.colors.turquoise}
          size={theme.spacing.md}
        />
      </Pressable>
    </>
  );
};

export default VoiceIcon;
