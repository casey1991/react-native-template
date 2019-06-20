import React from "react";
import { createStackNavigator } from "react-navigation";
import { SETTING } from "~/Libs/NavigationService/Constants";
import { SettingHeader } from "./headers";
import { SettingScreen } from "./Screens/Setting";
const SettingStack = createStackNavigator({
  [SETTING]: {
    screen: SettingScreen,
    navigationOptions: () => ({ header: <SettingHeader /> })
  }
});
export default SettingStack;
