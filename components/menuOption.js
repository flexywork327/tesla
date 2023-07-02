import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const MenuOption = ({ item }) => {
  return (
    <>
      <View style={styles.optionRow}>
        <MaterialCommunityIcons name={item.iconName} size={24} color="gray" />

        <Text style={styles.menuItemText}>{item.name}</Text>

        <FontAwesome
          name="chevron-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
  },
  menuItemText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 16,
  },
});
