import React from "react";
import { withStyles, TopNavigation } from "react-native-ui-kitten";
import i18n from "~/Libs/i18n";
import { SafeAreaView } from "react-navigation";
class HomeHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView style={[themedStyle.container]}>
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
    backgroundColor: theme["background-basic-color-1"]
  }
}));
class MessageHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView style={[themedStyle.container]}>
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
    backgroundColor: theme["background-basic-color-1"]
  }
}));
class MeHeaderComponent extends React.Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <SafeAreaView style={[themedStyle.container]}>
        <TopNavigation
          alignment="center"
          title={i18n.t("navigation:tabs.me")}
        />
      </SafeAreaView>
    );
  }
}
export const MeHeader = withStyles(MeHeaderComponent, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"]
  }
}));
