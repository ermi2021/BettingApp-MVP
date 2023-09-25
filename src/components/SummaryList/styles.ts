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

  summaryItemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  summaryItem: {
    paddingHorizontal: theme.spacing.small,
    fontSize: theme.typography.fontSize.smaller,
    paddingVertical: theme.spacing.smaller,
  },
  idText: {
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.green,
  },
  divider: {
    height: 2,
    backgroundColor: "grey",
    marginHorizontal: theme.spacing.small,
    marginBottom: theme.spacing.small,
  },
});

export default styles;
