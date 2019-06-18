import React from "react";
import { SafeAreaView } from "react-navigation";
import { TopNavigation } from "react-native-ui-kitten";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MeScreen } from "./Screens/Main/index";

const MeStack = createStackNavigator(
  {
    [Constants.Screens.ME]: {
      screen: MeScreen,
      navigationOptions: props => {
        return {
          header: (
            <SafeAreaView
              forceInset={{ top: "always", bottom: "never" }}
              style={{ backgroundColor: "#FFF" }}
            >
              <TopNavigation title="Me" alignment="center" />
            </SafeAreaView>
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
