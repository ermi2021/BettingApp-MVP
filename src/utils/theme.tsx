/* eslint-disable prettier/prettier */
import { Dimensions } from "react-native";
export const theme = {
  colors: {
    primary: "#9639a3",
    secondary: "#d89832",
    teritary: "#a4a9b6",
    background: "#ffffff",
    text: "#333",
    balanceIconBackground:"#d1efd6",
    green:"#3ca27a",
    transparentWhite:"#ffffffbb"
  },
  
  widthWithScreenSize:{
    full:Dimensions.get('screen').width,
    half:Dimensions.get('screen').width * 0.5,
  },
  heightWithScreenSize:{
    full:Dimensions.get('screen').height,
    half:Dimensions.get('screen').height * 0.5,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: {
      small: 14,
      medium: 16,
      large: 18,
      smaller:12
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
  },
  spacing: {
    small: 8,
    smaller:5,
    medium: 16,
    large: 24,
    larger:26,
  },
};
