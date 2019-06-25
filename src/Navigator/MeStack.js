import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MeScreen } from "./Screens/Main/index";
import { MeHeader } from "./headers";

const MeStack = createStackNavigator(
  {
    [Constants.Screens.ME]: {
      screen: MeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          header: (
            <MeHeader
              onSettingPress={navigation.getParam("onSettingPress", () => {})}
            />
          )
        };
      }
    }
  },
  {
    initialRouteName: Constants.Screens.ME
  }
);
export default MeStack;
