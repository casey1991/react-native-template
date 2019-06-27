import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text, Button } from "react-native-ui-kitten";
import PropTypes from "prop-types";
import { ImageUnknowPersonSource } from "~/assets/images";
import { ArrowRightIcon } from "~/assets/icons";
import i18n from "~/Libs/i18n";
class Header extends React.Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    onPress: PropTypes.func
  };
  static defaultProps = {
    avatar: ImageUnknowPersonSource.uri,
    name: i18n.t("screens:me.login"),
    onPress: () => {}
  };
  render() {
    const { onPress, avatar, name } = this.props;
    return (
      <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <View style={[styles.avatarContainer]}>
          <Avatar source={{ uri: avatar }} size="large" />
        </View>
        <View style={[styles.contentContainer]}>
          <Text category={"h6"}>{name}</Text>
        </View>
        <View style={[styles.actionsContainer]}>
          <Button icon={ArrowRightIcon} appearance="ghost" />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row"
  },
  avatarContainer: {
    marginRight: 8
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  actionsContainer: {
    flexDirection: "column"
  }
});
export default Header;
