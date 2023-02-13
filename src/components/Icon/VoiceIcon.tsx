import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "components/Icon/Icon";
import { styles } from "./index.styles";
import { theme } from "infrastructure/theme";
import { VoiceContext } from "contexts/voice.context";

const VoiceIcon: React.FC = () => {
  const { onRecordVoice, isRecording } = useContext(VoiceContext);

  return (
    <>
      <TouchableOpacity onPress={onRecordVoice}>
        <Icon
          style={styles.voice}
          type={"FontAwesome"}
          name={isRecording ? "microphone-slash" : "microphone"}
          color={theme.colors.turquoise}
          size={theme.spacing.md}
        />
      </TouchableOpacity>
    </>
  );
};

export default VoiceIcon;
