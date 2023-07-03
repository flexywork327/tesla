import Car from "../assets/images/car.png";
import Controls from "../components/controls";
import { FontAwesome } from "@expo/vector-icons";
import menuList from "../assets/data/menuOptions";
import MenuOption from "../components/menuOption";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
export default function Page() {
  const date = new Date().getFullYear();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Model S</Text>

            <View style={styles.batteryStaus}>
              <FontAwesome name="battery-3" size={24} color="green" />
              <Text style={styles.subtitle}> 250 mi</Text>
            </View>

            <Text style={styles.subtitle}>Parked</Text>
          </View>
          <View>
            <FontAwesome name="user-circle" size={30} color="red" />
          </View>
        </View>

        <View>
          <Image source={Car} style={styles.image} />
        </View>
        {/* the Controls component is added to the flatList */}
        {/* <Controls /> */}

        {/*  List Header Component allows us to add a component to the top of the list to make scroll with the list */}
        <FlatList
          data={menuList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MenuOption item={item} />}
          ListHeaderComponent={Controls}
        />
        <View style={styles.footer}>
          {date && <Text style={styles.footerText}>Tesla © {date}</Text>}
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
  batteryStaus: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 24,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 34,
  },
  footerText: {
    color: "gray",
    textAlign: "center",
  },
});
