import React, { Component } from "react";
import { mapping, light as theme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { I18nextProvider, withNamespaces } from "react-i18next";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import { AppNavigator } from "~/Navigator/AppStack";
import i18n from "~/Libs/i18n";

const WrappedStack = ({ t }) => (
  <AppNavigator
    screenProps={{ t, i18n }}
    ref={navigatorRef => {
      setTopLevelNavigator(navigatorRef);
    }}
  />
);
const ReloadAppOnLanguageChange = withNamespaces()(WrappedStack);

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={theme}>
        <I18nextProvider i18n={i18n}>
          <ReloadAppOnLanguageChange />
        </I18nextProvider>
      </ApplicationProvider>
    );
  }
}
