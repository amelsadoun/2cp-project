import { View } from "react-native";
import Logo from "../icons/Logo";
import MenuIcon from "../icons/MenuIcon";

function CommonHeader() {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        marginTop: 30,
        paddingTop: 10,
        backgroundColor: "#FEFEFF",
      }}
    >
      <MenuIcon />
      <Logo />
    </View>
  );
}

export default CommonHeader;
