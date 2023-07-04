import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  // get current year
  const date = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      {date && <Text style={styles.footerText}>Tesla © {date}</Text>}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    marginTop: "auto",
    paddingTop: 34,
  },
  footerText: {
    color: "gray",
    textAlign: "center",
  },
});
