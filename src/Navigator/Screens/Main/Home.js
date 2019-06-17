import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-ui-kitten";
export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Home Screen</Text>
        <Button />
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
