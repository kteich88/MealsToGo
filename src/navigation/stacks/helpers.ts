import { TransitionPresets } from "@react-navigation/stack";

export const stackScreenOptions = () => {
  return {
    // ...TransitionPresets.ModalPresentationIOS,
    presentation: "modal",
    headerShown: false,
  };
};

export const stackHeaderOptions = () => {
  return {
    header: () => null,
  };
};

export const authenticationStackScreenOptions = () => {
  return {
    headerShown: false,
  };
};
