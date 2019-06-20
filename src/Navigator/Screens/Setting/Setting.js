import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-ui-kitten";
import i18n, { changeLanguage } from "~/Libs/i18n";
import { LANGUAGE_EN_US, LANGUAGE_ZH_CH } from "~/Libs/i18n/constants";

class Setting extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          onPress={() =>
            changeLanguage(
              i18n.language === LANGUAGE_EN_US ? LANGUAGE_ZH_CH : LANGUAGE_EN_US
            )
          }
        >
          Switch
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Setting;
