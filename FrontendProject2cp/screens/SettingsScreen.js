import BackScreen from "../components/BackScreen";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ThemeSwitch from "../components/ThemeSwitch";
import ScreenTitle from "../components/ScreenTitle";
import { useUserMode } from "../contexts/UserContext";
import { Button, Switch, Icon } from "react-native-paper";
import { colors } from "../assets/colors";
import { useTheme } from "../contexts/ThemeContext";

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isUserMode } = useUserMode();
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <BackScreen>
      <ScreenTitle title="Settings" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 25,
          gap: 10,
        }}
      >
        {isUserMode && (
          <>
            <Button
              icon="account"
              mode="contained"
              style={{ width: "100%" }}
              contentStyle={{ alignSelf: "flex-start", gap: 8 }}
              buttonColor={isDarkMode ? colors.darkerBlue : colors.darkBlue}
              textColor={colors.white}
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ fontFamily: "MontserratRegular" }}>
                Edit Profile
              </Text>
            </Button>
            <Button
              icon="lock"
              mode="contained"
              style={{ width: "100%" }}
              contentStyle={{ alignSelf: "flex-start", gap: 8 }}
              buttonColor={isDarkMode ? colors.darkerBlue : colors.darkBlue}
              textColor={colors.white}
              onPress={() => console.log("Pressed")}
            >
              <Text style={{ fontFamily: "MontserratRegular" }}>
                Change password
              </Text>{" "}
            </Button>
          </>
        )}
        <Pressable
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
          onPress={toggleTheme}
        >
          <View style={{display:"flex", flexDirection: "row", gap: 10}}>
          <Icon source="weather-night" color={colors.white} size={20}></Icon>
          <Text
            style={{
              color: colors.white,
              fontFamily: "MontserratRegular"
            }}
          >
            Dark mode
          </Text></View>
          <ThemeSwitch></ThemeSwitch>
        </Pressable>
        <Pressable
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
            borderRadius: 20,
            gap:10,
            paddingHorizontal: 15,
          }}
        >
          <View style={{display:"flex", flexDirection: "row", gap: 10}}>
          <Icon source="bell" color={colors.white} size={20}></Icon>
          <Text
            style={{
              color: colors.white,
              fontFamily: "MontserratRegular"
            }}
          >
            Push notifications
          </Text></View>
          <Switch
            style={{
              marginTop: 0,
            }}
          ></Switch>
        </Pressable>
      </View>
    </BackScreen>
  );
}
/*<ThemeSwitch></ThemeSwitch>*/
