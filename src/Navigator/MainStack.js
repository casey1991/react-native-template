import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { HomeScreen } from "./Screens/Main/index";

export const BottomTabUI = props => {
  const onTabSelect = selectedIndex => {};

  return (
    <BottomNavigation
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title="Tab 1" />
      <BottomNavigationTab title="Tab 2" />
      <BottomNavigationTab title="Tab 3" />
    </BottomNavigation>
  );
};
const MainStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    tabBarComponent: BottomTabUI
  }
);
export default MainStack;
