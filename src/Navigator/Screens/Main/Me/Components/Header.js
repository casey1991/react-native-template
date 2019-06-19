import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text, Button } from "react-native-ui-kitten";
import PropTypes from "prop-types";
import { ImageApartmentSource } from "~/assets/images";
import { ArrowRightIcon } from "~/assets/icons";
class Header extends React.Component {
  static propTypes = {
    onPress: PropTypes.func
  };
  static defaultProps = {
    onPress: () => {}
  };
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <View style={[styles.avatarContainer]}>
          <Avatar source={ImageApartmentSource} size="large" />
        </View>
        <View style={[styles.contentContainer]}>
          <Text category={"h6"}>Casey</Text>
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
