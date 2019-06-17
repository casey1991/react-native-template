import React from "react";
import { View, StyleSheet, Text } from "react-native";
export default class Me extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Me</Text>
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
