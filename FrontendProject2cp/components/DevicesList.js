import React from "react";
import { Text, FlatList, TouchableOpacity, Image } from "react-native";
import BackScreen from "../components/BackScreen";
import { useFonts } from "expo-font";


const darkBlue = "#2F4062";
const white = "#FEFEFF";

export default function DevicesList({ navigation }) {

  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/MontserratAlt1-Bold.otf"),
    MontserratLight: require("../assets/fonts/MontserratAlt1-Light.otf"),
    MontserratExtraLight: require("../assets/fonts/MontserratAlt1-ExtraLight.otf"),
    MontserratExtraBold: require("../assets/fonts/MontserratAlt1-ExtraBold.otf"),
    MontserratMedium: require("../assets/fonts/MontserratAlt1-Medium.otf"),
    MontserratRegular: require("../assets/fonts/MontserratAlt1-Regular.otf"),
    MontserratSemiBold: require("../assets/fonts/MontserratAlt1-SemiBold.otf"),
    MontserratThin: require("../assets/fonts/MontserratAlt1-Thin.otf"),
  });

  
  var devicesData = [
    { id: 1, name: "Device 1" },
    { id: 6, name: "Device 6" },
    { id: 7, name: "Device 7" },
    { id: 8, name: "Device 8" },
  ];

  function onAddDevice() {
    console.log("bonjour");
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={
        item.name != "Add"
          ? () => navigation.navigate("DeviceDetails", { deviceId: item.id })
          : () => onAddDevice()
      }
      style={{
        backgroundColor: darkBlue,
        flex: 1,
        padding: 20,
        maxWidth: 176,
        aspectRatio: 1,
        margin: 5,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      {item.name != "Add" ? (
        <>
          <Image source={require("../assets/Light.png")}></Image>
          <Text
            style={{
              color: white,
              fontSize: 18,
              fontFamily: "MontserratMedium",
            }}
          >
            {item.name}
          </Text>
        </>
      ) : (
        <>
          <Image source={require("../assets/AddIcon.png")}></Image>
          <Text
            style={{
              color: white,
              fontSize: 18,
              fontFamily: "MontserratMedium",
              marginVertical: 4,
            }}
          >
            add device
          </Text>
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <BackScreen>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 23,
              marginLeft: 10,
              paddingVertical: 10,
            }}
          >
            Recent Devices
          </Text>
        )}
        numColumns={2}
        style={{ paddingHorizontal: 18 }}
        data={[...devicesData, { id: 8, name: "Add" }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </BackScreen>
  );
}
