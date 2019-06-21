import React from "react";
import {
  withStyles,
  TopNavigation,
  TopNavigationAction
} from "react-native-ui-kitten";
import i18n from "~/Libs/i18n";
import { SafeAreaView } from "react-navigation";
import { CloseIcon, ArrowBackIcon, SettingIcon } from "~/assets/icons";
import { navigate, goBack } from "~/Libs/NavigationService";
import { MAIN_STACK, SETTING } from "~/Libs/NavigationService/Constants";
class HomeHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("navigation:tabs.home")}
        />
      </SafeAreaView>
    );
  }
}
export const HomeHeader = withStyles(HomeHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"],
    borderBottomColor: theme["background-basic-color-3"],
    borderBottomWidth: 1
  }
}));
class MessageHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("navigation:tabs.message")}
        />
      </SafeAreaView>
    );
  }
}
export const MessageHeader = withStyles(MessageHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"],
    borderBottomColor: theme["background-basic-color-3"],
    borderBottomWidth: 1
  }
}));
class MeHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("navigation:tabs.me")}
          rightControls={
            <TopNavigationAction
              icon={SettingIcon}
              onPress={() => navigate(SETTING)}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
export const MeHeader = withStyles(MeHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"],
    borderBottomColor: theme["background-basic-color-3"],
    borderBottomWidth: 1
  }
}));

class LoginHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("screens:login.title")}
          rightControls={
            <TopNavigationAction
              icon={CloseIcon}
              onPress={() => navigate(MAIN_STACK)}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
export const LoginHeader = withStyles(LoginHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"]
  }
}));

class SettingHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("screens:setting.title")}
          leftControl={
            <TopNavigationAction
              icon={ArrowBackIcon}
              onPress={() => goBack()}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
export const SettingHeader = withStyles(SettingHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"],
    borderBottomColor: theme["background-basic-color-3"],
    borderBottomWidth: 1
  }
}));

class LanguagesHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView
        style={[themedStyle.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <TopNavigation
          alignment="center"
          title={i18n.t("screens:languages.title")}
          leftControl={
            <TopNavigationAction
              icon={ArrowBackIcon}
              onPress={() => goBack()}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
export const LanguagesHeader = withStyles(LanguagesHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"],
    borderBottomColor: theme["background-basic-color-3"],
    borderBottomWidth: 1
  }
}));
