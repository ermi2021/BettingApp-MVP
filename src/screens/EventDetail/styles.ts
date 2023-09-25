/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: theme.colors.transparentWhite,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    paddingVertical: theme.spacing.medium,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: theme.spacing.smaller,
    marginTop: theme.spacing.medium,
    gap: 15,
  },
  actionButton: {
    padding: theme.spacing.smaller,
    paddingHorizontal: theme.spacing.medium,
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: theme.typography.fontSize.smaller,
  },
  selected: {
    backgroundColor: "gray",
    borderWidth: 0,
    color: theme.colors.background,
  },
});

export default styles;
