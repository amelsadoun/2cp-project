import React from "react";
import { Text, FlatList, TouchableOpacity, Image } from "react-native";
import BackScreen from "../components/BackScreen";

const darkBlue = "#2F4062";
const white = "#FEFEFF";

export default function DevicesList({ navigation }) {
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
        gap: 10,
      }}
    >
      {item.name != "Add" ? (
        <>
          <Image source={require("../assets/Light.png")}></Image>
          <Text
            style={{
              color: white,
              fontSize: 18,
              fontFamily: "Poppins",
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
              fontFamily: "Poppins",
              marginVertical:4
            }}
          >
            Add
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
              fontFamily: "Poppins",
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
