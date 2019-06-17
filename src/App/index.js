import React, { Component } from "react";
import { mapping, light as theme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { AppNavigator } from "~/Navigator/AppStack";

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AppNavigator />
      </ApplicationProvider>
    );
  }
}
