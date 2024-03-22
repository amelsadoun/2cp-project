import BackScreen from "../components/BackScreen";
import { View, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ThemeSwitch from "../components/ThemeSwitch";
export default function SettingsScreen() {
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
          Settings
        </Text>
        <ThemeSwitch></ThemeSwitch>
      </View>
    </BackScreen>
  );
}
