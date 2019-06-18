import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MessageScreen } from "./Screens/Main/index";
import { MessageHeader } from "./headers";

const MessageStack = createStackNavigator(
  {
    [Constants.Screens.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: props => {
        return {
          header: <MessageHeader />
        };
      }
    }
  },
  {
    initialRouteName: Constants.Screens.MESSAGE
  }
);
export default MessageStack;
