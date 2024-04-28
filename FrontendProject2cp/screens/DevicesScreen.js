import BackScreen from "../components/BackScreen";
import { View, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ScreenTitle from "../components/ScreenTitle";

export default function DevicesScreen() {
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
        <ScreenTitle title="Devices"></ScreenTitle>
      </View>
    </BackScreen>
  );
}
