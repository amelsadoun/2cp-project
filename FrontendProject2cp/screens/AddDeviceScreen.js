import React, { useState } from "react";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import BackScreen from "../components/BackScreen";
import { colors } from "../assets/colors";
import EditingInput from "../components/EditingInput";
export default function AddDeviceScreen({ navigation }) {
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");

  const addDevice = async (deviceName, state, userId) => {
    try {
      const response = await fetch("http://192.168.56.1:5000/devices/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceName: deviceName,
          state: state,
          userId: userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add device");
      }

      const data = await response.json();
      console.log(data.message); // This will log the message from the server
      // Optionally, you can perform any additional actions after successfully adding the device
    } catch (error) {
      console.error("Error adding device:", error.message);
      // Handle error scenarios in your React Native application
    }
  };

  function onAddDevice() {
    addDevice(deviceName, "Off", 5);
  }

  return (
    <BackScreen>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        <EditingInput
          label="Device name"
          onChange={(deviceName) => setDeviceName(deviceName)}
          value={deviceName}
        ></EditingInput>
        <EditingInput
          label="Device type"
          onChange={(deviceType) => setDeviceType(deviceType)}
          value={deviceType}
        ></EditingInput>
        <Pressable
          style={styles.addButton}
          onPress={() => {
            onAddDevice();
            navigation.navigate("DevicesList");
          }}
        >
          <Text style={styles.addButtonText}>Add device</Text>
        </Pressable>
      </ScrollView>
    </BackScreen>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    gap: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    width: "100%",
    height: 250,
    padding: 30,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 70,
    marginVertical: 12,
    color: colors.white,
    opacity: 0.75,
    fontFamily: "MontserratRegular",
  },
  addButton: {
    backgroundColor: colors.white,
    color: "black",
    width: 280,
    height: 50,
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 15,
  },
  addButtonText: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
});
