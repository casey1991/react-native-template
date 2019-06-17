import React from "react";
import { createBottomTabNavigator, SafeAreaView } from "react-navigation";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Constants, navigate } from "~/Libs/NavigationService";
import { HomeScreen, MessageScreen, MeScreen } from "./Screens/Main/index";
import i18n from "~/Libs/i18n";

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
        <BottomNavigationTab title={i18n.t("navigation:tabs.home")} />
        <BottomNavigationTab title={i18n.t("navigation:tabs.message")} />
        <BottomNavigationTab title={i18n.t("navigation:tabs.me")} />
      </BottomNavigation>
    </SafeAreaView>
  );
};
const MainStack = createBottomTabNavigator(
  {
    [Constants.Screens.HOME]: { screen: HomeScreen },
    [Constants.Screens.MESSAGE]: { screen: MessageScreen },
    [Constants.Screens.ME]: { screen: MeScreen }
  },
  {
    initialRouteName: Constants.Screens.HOME,
    tabBarComponent: BottomTabUI
  }
);
export default MainStack;
