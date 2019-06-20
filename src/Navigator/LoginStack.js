import React from "react";
import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "~/Navigator/Screens/Auth";
import { LOGIN } from "~/Libs/NavigationService/Constants";
import { LoginHeader } from "./headers";
const LoginStack = createStackNavigator({
  [LOGIN]: {
    screen: LoginScreen,
    navigationOptions: () => ({ header: <LoginHeader /> })
  }
});
export default LoginStack;
