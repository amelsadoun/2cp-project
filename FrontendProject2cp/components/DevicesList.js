import React from "react";
import { Text, FlatList, TouchableOpacity, Image } from "react-native";
import BackScreen from "../components/BackScreen";
import { useFonts } from "expo-font";
import axios from 'axios';
import { useState, useEffect } from "react";
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


  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('http://192.168.56.1:5000/api/device/user/65f564ce5af63d63941076db');
        setFetched(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);
  

  const devicesData= [...(fetched.devices?.devices || [])]
  console.log(fetched.devices?.devices)


  function onAddDevice() {
    console.log("bonjour");
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={
        item.name != "Add"
          ? () => navigation.navigate("DeviceDetails", { deviceId: item._id })
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
              fontSize: 26,
              marginLeft: 10,
              paddingTop: 8,
              paddingBottom: 15,
              textAlign: "center",
            }}
          >
            Recent Devices
          </Text>
        )}
        numColumns={2}
        style={{ paddingHorizontal: 18 }}
        data={[...devicesData, { _id: "add", name: "Add" }]}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </BackScreen>
  );
}
