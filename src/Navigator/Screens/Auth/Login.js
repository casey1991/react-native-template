import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-ui-kitten";
import i18n from "~/Libs/i18n";
import { PersonOutlineIcon, ClockOutlineIcon } from "~/assets/icons";

class Login extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Input
          style={[styles.inputContainer]}
          placeholder={i18n.t("screens:login.username")}
          icon={PersonOutlineIcon}
        />
        <Input
          style={[styles.inputContainer]}
          placeholder={i18n.t("screens:login.password")}
          icon={ClockOutlineIcon}
        />
        <Button style={[styles.buttonContainer]}>
          {i18n.t("screens:login.login")}
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8
  },
  buttonContainer: {
    margin: 8
  }
});
export default Login;
