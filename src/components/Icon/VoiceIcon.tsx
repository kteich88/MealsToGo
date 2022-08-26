import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";
import Icon from "components/Icon/Icon";
import { styles } from "./index.styles";
import { theme } from "infrastructure/theme";

const VoiceIcon: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [text, setText] = useState<string[]>([]);

  const onSpeechStart = () => {
    setText([]);
  };

  const onSpeechEnd = () => {
    setText([]);
  };

  const onSpeechResults = (event: SpeechResultsEvent) => {
    setText(event.value ?? []);
  };

  const onSpeechError = (event: SpeechErrorEvent) => {
    console.error(event.error);
  };

  const onRecordVoice = () => {
    isRecording ? Voice.stop() : Voice.start("en-US");
    setIsRecording(!isRecording);
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy()
        .then(Voice.removeAllListeners)
        .catch((error) => {
          console.error(error);
          Alert.alert(error);
        });
    };
  }, []);

  return (
    <>
      <TouchableOpacity onPress={onRecordVoice}>
        <Icon
          style={styles.voice}
          type={"MaterialIcons"}
          name={"keyboard-voice"}
          color={
            isRecording ? theme.colors.text.primary : theme.colors.text.disabled
          }
          size={theme.spacing.twenty}
        />
      </TouchableOpacity>
      <Text>{text}</Text>
    </>
  );
};

export default VoiceIcon;
