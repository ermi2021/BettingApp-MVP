/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.background,
    marginHorizontal: theme.spacing.small,

    padding: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    borderRadius: 20,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  selected: {
    backgroundColor: theme.colors.primary,
  },
  itemName: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.smaller,
  },
  selectedItemName: {
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.bold,
  },
  eventList: {
    width: theme.widthWithScreenSize.full,
    paddingVertical: theme.spacing.small,
  },
});

export default styles;
