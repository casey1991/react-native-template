import { createStackNavigator } from "react-navigation";
import LoginStack from "./LoginStack";
const AuthStack = createStackNavigator(
  {
    LoginStack
  },
  { headerMode: "none" }
);
export default AuthStack;
