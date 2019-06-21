import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Button } from "react-native-ui-kitten";
import i18n from "~/Libs/i18n";
import { LANGUAGE_EN_US } from "~/Libs/i18n/constants";
import { ArrowRightIcon } from "~/assets/icons";
import { navigate, Constants } from "~/Libs/NavigationService";

class Setting extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <ListItem
          title={i18n.t("screens:setting.languages")}
          description={i18n.language === LANGUAGE_EN_US ? "English" : "中文"}
          accessory={() => (
            <Button icon={ArrowRightIcon} disabled appearance="ghost" />
          )}
          onPress={() => {
            navigate(Constants.Screens.LANGUAGES);
          }}
        />
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
