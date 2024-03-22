import { View, Pressable } from "react-native";
import { Svg } from "react-native-svg";
import React from "react";
import Devices from "../icons/Devices";
import Home from "../icons/Home";
import User from "../icons/User";
import NotificationsIcon from "../icons/Notifications";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";
function MyTabBar({ state, descriptors, navigation }) {
  const { isDarkMode } = useTheme();

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? colors.darkBlue : colors.white,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        height: "12%",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 14,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isFocused ? (isDarkMode?colors.darkBlue:colors.darkerBlue) : "transparent",
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: 9,
                marginHorizontal: 19,
                aspectRatio: 1,
                borderRadius: 100,
              }}
            >
              <Svg
                width={27}
                height={28}
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Icon name={label}></Icon>
              </Svg>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function Icon({ name }) {
  switch (name) {
    case "Settings":
      return <User></User>;
    case "Home":
      return <Home></Home>;
    case "Devices":
      return <Devices></Devices>;
    case "Notifications":
      return <NotificationsIcon></NotificationsIcon>;
  }
}

export default MyTabBar;
