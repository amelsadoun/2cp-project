import { SafeAreaView, Pressable, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import { Animated } from "react-native";
import PreviewCarousel from "../components/PreviewCarousel";

export default function PreviewScreen({ navigation }) {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkBlue,
      }}
    >
      <PreviewCarousel navigation={navigation} />
      <Pressable
        style={{
          position: "absolute",
          bottom: "10%"
        }}
        onPress={() => navigation.navigate("Main screen")}
      >
        <Text>Start</Text>
      </Pressable>
    </SafeAreaView>
  );
}
