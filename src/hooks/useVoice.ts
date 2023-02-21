import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import { useState, useEffect } from "react";

export const useVoice = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [textWhileListening, setTextWhileListening] = useState<string[]>([]);
  const [recordedText, setRecordedText] = useState<string>("");

  const onSpeechStart = () => {
    setTextWhileListening([]);
  };

  const onSpeechEnd = () => {
    setRecordedText(textWhileListening.join());
  };

  const onSpeechResults = (event: SpeechResultsEvent) => {
    setTextWhileListening(event.value ?? []);
  };

  const onSpeechError = (event: SpeechErrorEvent) => {
    console.error(event.error);
  };

  const onRecordVoice = () => {
    setIsRecording(!isRecording);
  };

  const onStopRecording = () => {
    try {
      Voice.destroy();
      Voice.removeAllListeners();
    } catch (error) {
      console.error(error);
    }
  };

  // Lifecycle Hooks
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
  }, []);

  useEffect(() => {
    // console.log("I am in this useEffect. isRecording:", isRecording);
    isRecording ? Voice.start("en-GB") : Voice.stop();
  }, [isRecording]);

  return {
    onRecordVoice,
    onStopRecording,
    isRecording,
    textWhileListening,
    recordedText,
  };
};
