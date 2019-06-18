import React from "react";
import { createBottomTabNavigator, SafeAreaView } from "react-navigation";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Constants, navigate } from "~/Libs/NavigationService";
import HomeStack from "./HomeStack";
import MessageStack from "./MessageStack";
import MeStack from "./MeStack";
import i18n from "~/Libs/i18n";
import { MessageIcon, PersonIcon, ActivityIcon } from "~/assets/icons";

export const BottomTabUI = props => {
  const onTabSelect = selectedIndex => {
    let routeName = null;
    switch (selectedIndex) {
      case 0:
        routeName = Constants.Screens.HOME;
        break;
      case 1:
        routeName = Constants.Screens.MESSAGE;
        break;
      case 2:
        routeName = Constants.Screens.ME;
        break;
    }
    if (routeName) {
      navigate(routeName);
    }
  };
  return (
    <SafeAreaView forset={{ top: "never", bottom: "always" }}>
      <BottomNavigation
        selectedIndex={props.navigation.state.index}
        onSelect={onTabSelect}
      >
        <BottomNavigationTab
          title={i18n.t("navigation:tabs.home")}
          icon={ActivityIcon}
        />
        <BottomNavigationTab
          title={i18n.t("navigation:tabs.message")}
          icon={MessageIcon}
        />
        <BottomNavigationTab
          title={i18n.t("navigation:tabs.me")}
          icon={PersonIcon}
        />
      </BottomNavigation>
    </SafeAreaView>
  );
};
const MainStack = createBottomTabNavigator(
  {
    [Constants.Stacks.HOME_STACK]: { screen: HomeStack },
    [Constants.Stacks.MESSAGE_STACK]: { screen: MessageStack },
    [Constants.Stacks.ME_STACK]: { screen: MeStack }
  },
  {
    initialRouteName: Constants.Stacks.HOME_STACK,
    tabBarComponent: BottomTabUI
  }
);
export default MainStack;
