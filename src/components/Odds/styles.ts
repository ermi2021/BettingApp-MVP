/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  oddsInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",

    marginVertical: theme.spacing.small,
    marginHorizontal: theme.spacing.small,
  },
  odd: {
    fontSize: theme.typography.fontSize.smaller,
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.bold,
  },
  oddContainer: {
    borderRadius: 8,
    backgroundColor: "#ab4fa5",
    //paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.smaller,
    marginHorizontal: theme.spacing.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    gap: 5,
  },

  times: {
    color: theme.colors.green,
    fontSize: theme.typography.fontSize.smaller,
  },
  borderRight: {
    width: 2,
    height: 15,
    backgroundColor: theme.colors.secondary,
  },
});

export default styles;
