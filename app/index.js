import Car from "../assets/images/car.png";
import Controls from "../components/controls";
import { FontAwesome } from "@expo/vector-icons";
import menuList from "../assets/data/menuOptions";
import MenuOption from "../components/menuOption";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";

export default function Page() {
  return (
    <>
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

        {/*  List Header Component allows us to add a component to the top of the list to make scroll with the list */}
        <FlatList
          data={menuList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MenuOption item={item} />}
          ListHeaderComponent={Controls}
        />
        <View>
          <Text style={{ color: "gray", textAlign: "center", marginTop: 24 }}>
            Tesla © 2021
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 10,
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
});
