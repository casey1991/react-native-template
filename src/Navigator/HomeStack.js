import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { HomeScreen } from "./Screens/Main/index";
import { HomeHeader } from "./headers";
// TODO: create all headers and with ui theme
const HomeStack = createStackNavigator(
  {
    [Constants.Screens.HOME]: {
      screen: HomeScreen,
      navigationOptions: props => {
        return {
          header: <HomeHeader />
        };
      }
    }
  },
  {
    initialRouteName: Constants.Screens.HOME
  }
);
export default HomeStack;
