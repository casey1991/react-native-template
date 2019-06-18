import React from "react";
import { SafeAreaView } from "react-navigation";
import { TopNavigation } from "react-native-ui-kitten";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { HomeScreen } from "./Screens/Main/index";
// TODO: create all headers and with ui theme
const HomeStack = createStackNavigator(
  {
    [Constants.Screens.HOME]: {
      screen: HomeScreen,
      navigationOptions: props => {
        return {
          header: (
            <SafeAreaView
              forceInset={{ top: "always", bottom: "never" }}
              style={{ backgroundColor: "#FFF" }}
            >
              <TopNavigation title="Home" alignment="center" />
            </SafeAreaView>
          )
        };
      }
    }
  },
  {
    initialRouteName: Constants.Screens.HOME
  }
);
export default HomeStack;
