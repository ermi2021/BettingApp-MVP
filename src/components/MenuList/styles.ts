/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.small,
  },

  menuItem: {
    textDecorationLine: "none",
    marginEnd: theme.spacing.large,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.regular,
    color: theme.colors.text,
  },
  selectedMenu: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.text,
    paddingBottom: theme.spacing.smaller,
    paddingHorizontal: theme.spacing.smaller,
    fontWeight: theme.typography.fontWeight.bold,
  },
});

export default styles;
