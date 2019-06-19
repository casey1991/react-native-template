import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, withStyles } from "react-native-ui-kitten";
import { Header } from "./Components";
import { ScrollView } from "react-native-gesture-handler";
class Me extends React.Component {
  _onHeaderPressed = () => {};
  _renderItem = () => {
    return <ListItem title={"title"} />;
  };
  render() {
    const { themedStyle } = this.props;
    return (
      <ScrollView style={[styles.container, themedStyle.container]}>
        <Header onPress={this._onHeaderPressed} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default withStyles(Me, theme => ({
  container: {
    backgroundColor: theme["background-basic-color-1"]
  }
}));
