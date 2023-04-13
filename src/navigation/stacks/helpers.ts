import { TransitionPresets } from "@react-navigation/stack";

export const stackScreenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const stackHeaderOptions = () => {
  return {
    header: () => null,
  };
};
