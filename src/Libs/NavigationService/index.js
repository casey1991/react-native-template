import { NavigationActions } from "react-navigation";
export { default as Constants } from "./Constants";

let _navigator = null;
export const setTopLevelNavigator = ref => {
  _navigator = ref;
};
export const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
export const goBack = key => {
  _navigator.dispatch(
    NavigationActions.back({
      key: key
    })
  );
};
