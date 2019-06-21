import React from "react";
import { createStackNavigator } from "react-navigation";
import { SETTING, LANGUAGES } from "~/Libs/NavigationService/Constants";
import { SettingHeader, LanguagesHeader } from "./headers";
import { SettingScreen, LanguagesScreen } from "./Screens/Setting";
const SettingStack = createStackNavigator({
  [SETTING]: {
    screen: SettingScreen,
    navigationOptions: () => ({ header: <SettingHeader /> })
  },
  [LANGUAGES]: {
    screen: LanguagesScreen,
    navigationOptions: () => ({ header: <LanguagesHeader /> })
  }
});
export default SettingStack;
