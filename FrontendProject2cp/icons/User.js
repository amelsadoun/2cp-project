import Svg, { Path, Circle } from "react-native-svg";
import { View } from "react-native-web";
function User({color}) {
  return (
    <>
      <Path
        d="M21.7167 25.0581V22.385C21.7167 20.9671 21.171 19.6072 20.1998 18.6046C19.2285 17.602 17.9111 17.0387 16.5375 17.0387H6.17918C4.80557 17.0387 3.48823 17.602 2.51695 18.6046C1.54566 19.6072 1 20.9671 1 22.385V25.0581"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3581 11.6925C14.2185 11.6925 16.5373 9.2989 16.5373 6.34625C16.5373 3.3936 14.2185 1 11.3581 1C8.49775 1 6.17896 3.3936 6.17896 6.34625C6.17896 9.2989 8.49775 11.6925 11.3581 11.6925Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

export default User;
