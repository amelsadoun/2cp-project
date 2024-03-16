import BackScreen from "../components/BackScreen";
import { View, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";

export default function NotificationsScreen() {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

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
        >
          Notifications
        </Text>
      </View>
    </BackScreen>
  );
}
