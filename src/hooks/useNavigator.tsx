import Icon from "components/Icons/Icon";
import { ScreenName } from "infrastructure/navigation";
import { useState } from "react";

const useNavigator = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const useTabBarIcon = ({ route }) => {
    switch (route) {
      case PunchStatus.In:
        setIsFocused(true);
        return PunchAction.ClockOut;

      case route.name === ScreenName.profile:
        return <Icon type={"EvilIcons"} name={"user"} />;
    }
  };

  let iconName;

  if (route.name === "Recipes") {
    iconName = focused
      ? "ios-information-circle"
      : "ios-information-circle-outline";
  } else if (route.name === "Groceries") {
    iconName = focused ? "ios-list-box" : "ios-list";
  } else if (route.name === "Meals") {
    iconName = focused ? "ios-restaurant" : "ios-restaurant";
  } else if (route.name === "Ingredients") {
    iconName = focused ? "ios-restaurant" : "ios-restaurant";
  } else if (route.name === "Profile") {
    iconName = focused ? "user" : "ios-restaurant";
  }

  return {
    isFocused,
  };
};

export default useNavigator;
