import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, withStyles } from "react-native-ui-kitten";
import i18n, { Constants as I18nConstants, changeLanguage } from "~/Libs/i18n";
import { CheckMarkIcon } from "~/assets/icons";

class Languages extends Component {
  render() {
    const {} = this.props;
    return (
      <View style={[styles.container]}>
        <ListItem
          title={"English"}
          accessory={() =>
            i18n.language === I18nConstants.LANGUAGE_EN_US ? (
              CheckMarkIcon(styles.iconStyles)
            ) : (
              <View />
            )
          }
          onPress={() => {
            changeLanguage(I18nConstants.LANGUAGE_EN_US);
          }}
        />
        <ListItem
          title={"中文"}
          accessory={() =>
            i18n.language === I18nConstants.LANGUAGE_ZH_CH ? (
              CheckMarkIcon(styles.iconStyles)
            ) : (
              <View />
            )
          }
          onPress={() => {
            changeLanguage(I18nConstants.LANGUAGE_ZH_CH);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconStyles: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginRight: 8
  },
  iconStylesActive: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "transparent"
  }
});
export default withStyles(Languages, theme => ({}));
