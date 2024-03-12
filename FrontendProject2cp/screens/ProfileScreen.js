import BackScreen from "../components/BackScreen";
import { View, Text } from "react-native";

export default function ProfileScreen(){
    return(
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
            Profile
          </Text>
        </View>
      </BackScreen>
        )

}