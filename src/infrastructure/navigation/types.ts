import { ComponentType } from "react";
import { ScreenNames } from "./constants";

export interface NavigatorList {
  name: ScreenNames;
  component: ComponentType<any> | undefined;
  //   tabBarIcon: ReactNode;
}
