import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TextBox from "../TextBox";

const Footer = props => {
  const { text } = props;

  return (
    <View style={styles.mainContainer}>
      <TextBox text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0C72FF"
  }
});

export default Footer;
