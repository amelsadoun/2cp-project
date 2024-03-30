import React from "react";
import { Text, FlatList, TouchableOpacity, Image } from "react-native";
import BackScreen from "../components/BackScreen";
import { useFonts } from "expo-font";
import axios from "axios";
import { useState, useEffect } from "react";
import { colors } from "../assets/colors";
import Fonts from "../components/Fonts";
import { useTheme } from "../contexts/ThemeContext";
import ScreenTitle from "../components/ScreenTitle";
import { ThemeProvider } from "../contexts/ThemeContext";
export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const [fontsLoaded] = useFonts(Fonts);

  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(
          "http://192.168.56.1:5000/api/device/user/65f564ce5af63d63941076db"
        );
        setFetched(response.data);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, []);

  const devicesData = [...(fetched.devices?.devices || [])];
  console.log(fetched.devices?.devices);

  function onAddDevice() {
    console.log("bonjour");
  }

  const DevicesListItem = ({ item }) => (
    <TouchableOpacity
      onPress={
        item.name != "Add"
          ? () => navigation.navigate("DeviceDetails", { deviceId: item._id })
          : () => onAddDevice()
      }
      style={{
        backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
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
              color: colors.white,
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
              color: colors.white,
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
      <ScreenTitle title="Home"></ScreenTitle>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              fontFamily: "MontserratSemiBold",
              fontSize: 20,
              paddingVertical: 13,
              color: isDarkMode? colors.white: "black"
            }}
          >
            Recent devices
          </Text>
        }
        numColumns={2}
        style={{ paddingHorizontal: 18 }}
        data={[...devicesData, { _id: "add", name: "Add" }]}
        renderItem={DevicesListItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </BackScreen>
  );
}
