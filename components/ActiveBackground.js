import Svg, { Path, Ellipse } from "react-native-svg";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const marginbtm= (screenHeight * 3/100);


const darkBlue = "#2F4062";
const darkerBlue = "#212c44";

function ActiveBackground({ children, isFocused }) {
  return (
    <>
      <Svg
        style={{
          display: isFocused ? "" : "none",
          position: "absolute",
          zIndex: -1,
          height: 80,
          width:135,
          top:-45
        }}
        viewBox="0 0 110 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Ellipse cx="55" cy="35" rx="27" ry="27" fill={darkerBlue} />
      </Svg>
      <Svg
        style={{
          position: "absolute",
          paddingHorizontal: 25,
        }}
        width={27}
        height={28}
        viewBox="0 0 27 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </Svg>
    </>
  );
}

export default ActiveBackground;
