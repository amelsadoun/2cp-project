import BackScreen from "../components/BackScreen";
import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ProfileScreen() {
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
  console.log(haja.data?.users[0])

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
       
        <FlatList
          ListHeaderComponent={
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              List of users:
            </Text>
          }
          data={usersTable}
          renderItem={({ item, index }) => (
            <>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop:10,
                  textDecorationLine: "underline"
                }}
              >
                User {index+1}:
              </Text>
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                email: {item.email}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Phone number: {item.phoneNumber}
              </Text>
            </>
          )}
        />
      </View>
    </BackScreen>
  );
}
