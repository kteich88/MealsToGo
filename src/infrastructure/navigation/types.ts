import { ComponentType } from "react";
import { ScreenName } from "./constants";

export interface NavigatorList {
  name: ScreenName;
  component: ComponentType<any> | undefined;
  //   tabBarIcon: ReactNode;
}
