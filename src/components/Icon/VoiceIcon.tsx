import React, { useContext, useEffect, useState } from "react";
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
          type={"MaterialIcons"}
          name={isRecording ? "voice-over-off" : "record-voice-over"}
          color={theme.colors.text.primary}
          size={theme.spacing.twenty}
        />
      </TouchableOpacity>
    </>
  );
};

export default VoiceIcon;
