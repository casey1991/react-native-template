import React from "react";
import { SafeAreaView } from "react-navigation";
import { TopNavigation } from "react-native-ui-kitten";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MessageScreen } from "./Screens/Main/index";

const MessageStack = createStackNavigator(
  {
    [Constants.Screens.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: props => {
        return {
          header: (
            <SafeAreaView
              forceInset={{ top: "always", bottom: "never" }}
              style={{ backgroundColor: "#FFF" }}
            >
              <TopNavigation title="Message" alignment="center" />
            </SafeAreaView>
          )
        };
      }
    }
  },
  {
    initialRouteName: Constants.Screens.MESSAGE
  }
);
export default MessageStack;
