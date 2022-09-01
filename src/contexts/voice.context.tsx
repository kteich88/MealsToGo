import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import React, { useState, createContext, useEffect, ReactNode } from "react";
import { Alert } from "react-native";

interface VoiceContext {
  text: string[];
  onRecordVoice: () => void;
  isRecording: boolean;
}

export const VoiceContext = createContext<VoiceContext>({} as VoiceContext);

interface VoiceContextProviderProps {
  children?: ReactNode;
}

export const VoiceContextProvider: React.FC<VoiceContextProviderProps> = ({
  children,
}) => {
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
    return text;
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
    <VoiceContext.Provider
      value={{
        text,
        onRecordVoice,
        isRecording,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
};
