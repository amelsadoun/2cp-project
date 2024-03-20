import BackScreen from "../components/BackScreen";
import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import axios from "axios";



export default function ProfileScreen() {
  const [fontsLoaded] = useFonts(Fonts);
  const [haja, setHaja] = useState({});
  useEffect(() => {
    async function getAllHajas() {
      try {
        const haja = await axios.get(
          "http://192.168.56.1:5000/api/user/internal"
        );
        console.log(haja);
        setHaja(haja);
      } catch (error) {
        console.log(error);
      }
    }
    getAllHajas();
  }, []);

  const usersTable = haja.data?.users;
  console.log(haja.data?.users[0]);

  return (
    <BackScreen>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 8,
            paddingBottom: 15,
            fontSize: 26,
            alignSelf: "center",
            fontFamily: "MontserratBold",
          }}
        >My Profile</Text>
        </View>
    </BackScreen>
  );
}