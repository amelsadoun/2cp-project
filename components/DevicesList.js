import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BackScreen from "../components/BackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeviceInfoScreen from "../screens/DeviceInfoScreen";

const darkBlue = "#2F4062";

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
        marginVertical: 12,
        marginHorizontal: 12,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      }}
    >
      {item.name != "Add" ? <Text>{item.name}</Text> : <Text>Add</Text>}
    </TouchableOpacity>
  );

  return (
    <BackScreen>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              fontWeight: "bold",
              //fontFamily: "nexa",
              fontSize: 25,
              alignSelf: "center",
              paddingVertical: 10
            }}
          >
            Devices
          </Text>
        )}
        numColumns={2}
        style={{ marginHorizontal: 10 }}
        data={[...devicesData, { id: 8, name: "Add" }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </BackScreen>
  );
}
