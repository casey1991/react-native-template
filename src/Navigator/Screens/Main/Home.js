import React from "react";
import { View, StyleSheet } from "react-native";
export default class Home extends React.Component {
  render() {
    return <View style={[styles.container]}>{/* content */}</View>;
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
