import { createSwitchNavigator, createAppContainer } from "react-navigation";
import MainStack from "./MainStack";
const AppStack = createSwitchNavigator({
  MainStack
});
export const AppNavigator = createAppContainer(AppStack);
