import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import MenuStack from "./MenuStack";
import SettingStack from "./SettingStack";

const MainStack = createStackNavigator(
  {
    [Constants.Stacks.MENU_STACK]: { screen: MenuStack },
    [Constants.Stacks.SETTING_STACK]: { screen: SettingStack }
  },
  {
    headerMode: "none",
    initialRouteName: Constants.Stacks.MenuStack
  }
);
export default MainStack;
