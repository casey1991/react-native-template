import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-ui-kitten";
import { navigate } from "~/Libs/NavigationService";
import { LOGIN } from "~/Libs/NavigationService/Constants";
import i18n from "~/Libs/i18n";
export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        {/* content */}
        <Button onPress={() => navigate(LOGIN)}>
          {i18n.t("screens:login.title")}
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  }
});
