import { Image, StyleSheet, Text, View } from "react-native";
import Car from "../assets/images/car.png";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>

          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <View>
          <FontAwesome name="user-circle" size={30} color="red" />
        </View>
      </View>

      <View>
        <Image source={Car} style={styles.image} />
      </View>

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      {/* Manu option list */}
      <View style={styles.optionRow}>
        <FontAwesome name="car" size={24} color="gray" />

        <Text style={styles.menuItemText}>Controls</Text>

        <FontAwesome
          name="chevron-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 24,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
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
