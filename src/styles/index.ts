/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import { theme } from "../utils/theme";
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Set the background color to white
  },
  appTitle:{
    fontSize:theme.typography.fontSize.medium,
    fontWeight:theme.typography.fontWeight.bold,
    color:theme.colors.primary,
  }
});

export default globalStyles;
