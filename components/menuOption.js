import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const MenuOption = ({ item }) => {
  return (
    <>
      {/* the link props only display text and so we add asChild to make rendering other items possible.Then we add the next item with an onPress props to make it work */}
      <Link href={item.href} asChild>
        <Pressable style={styles.optionRow}>
          <MaterialCommunityIcons name={item.iconName} size={24} color="gray" />

          <Text style={styles.menuItemText}>{item.name}</Text>

          <FontAwesome
            name="chevron-right"
            size={24}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </Pressable>
      </Link>
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
