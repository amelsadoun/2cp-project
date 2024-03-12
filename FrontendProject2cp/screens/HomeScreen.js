import React, { useState, useEffect } from "react";
import BackScreen from "../components/BackScreen";
import { View, Text } from "react-native";
import axios from "axios";

export default function HomeScreen() {
  const [haja, setHaja] = useState({});
  useEffect(() => {
    async function getAllHajas() {
      try {
        const haja = await axios.get("http://192.168.56.1:5000/api/user/internal");
        console.log(haja);
        setHaja(haja);
      } catch (error) {
        console.log(error);
      }
    }
    getAllHajas();
  }, []);

  


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
            fontWeight: "bold",
            //fontFamily: "nexa",
            fontSize: 30,
            alignSelf: "center",
          }}
        >
          Homepage
        </Text>
        <Text>data: {haja.data?.users[0].email}</Text>
      </View>
    </BackScreen>
  );
}
