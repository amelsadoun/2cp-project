import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import Devices from "../icons/Devices";
import Home from "../icons/Home";
import User from "../icons/User";
import NotificationsIcon from "../icons/Notifications";
import ActiveBackground from "./ActiveBackground";

const darkBlue = "#2F4062";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        backgroundColor: darkBlue,
        height: "12%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 14,
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
            }}
          >
            <ActiveBackground isFocused={isFocused}>
              <Icon name={label}></Icon>
            </ActiveBackground>
          </Pressable>
        );
      })}
    </View>
  );
}

function Icon({ name }) {
  switch (name) {
    case "Profile":
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
