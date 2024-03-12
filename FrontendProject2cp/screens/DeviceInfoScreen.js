import { useState } from 'react';
import BackScreen from '../components/BackScreen';
import React from 'react';
import { View, Text, Switch } from 'react-native';

const DeviceInfoScreen = ({ route }) => {
  const { deviceId } = route.params;

  // You can fetch the device details based on the deviceId
  // For now, just display the ID as an example
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          }}
        >
          Lighswitch nb.{deviceId}
        </Text>
        <Switch
          trackColor={{ false: "#red", true: "#green" }}
          thumbColor={isEnabled ? "#green" : "#red"}
          ios_backgroundColor="#blue"
          onValueChange={toggleSwitch}
          value={isEnabled}
        ></Switch>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              //     fontFamily: "nexa",
              fontSize: 20,
            }}
          >
            The light is
          </Text>
          <Text
            style={{
              //      fontFamily: "nexa",
              fontWeight: "bold",
              color: isEnabled ? "green" : "red",
              fontSize: 20,
            }}
          >
            {isEnabled ? " on" : " off"}
          </Text>
        </View>
      </View>
    </BackScreen>
  );
};

export default DeviceInfoScreen;
