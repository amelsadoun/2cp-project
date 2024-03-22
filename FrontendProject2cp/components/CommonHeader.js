import { View } from "react-native";
import Logo from "../icons/Logo";
import MenuIcon from "../icons/MenuIcon";
import { useTheme } from "../contexts/ThemeContext";
const darkBlue = "#2F4062";

function CommonHeader() {
  const {isDarkMode}=useTheme()
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
        backgroundColor: isDarkMode?darkBlue:"#FEFEFF",
      }}
    >
      <MenuIcon />
      <Logo />
    </View>
  );
}

export default CommonHeader;
