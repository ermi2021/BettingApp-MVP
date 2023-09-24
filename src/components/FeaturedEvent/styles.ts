/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: theme.spacing.small,
    padding: theme.spacing.small,
    borderRadius: 20,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  itemName: {
    color: theme.colors.background,
    fontSize: theme.typography.fontSize.smaller,
  },
  eventList: {
    width: theme.widthWithScreenSize.full,
    paddingVertical: theme.spacing.small,
  },
  feturedEventContainer: {
    height: 200,
    margin: theme.spacing.small,
    marginVertical: theme.spacing.large,
    width: theme.widthWithScreenSize.full * 0.96,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBgStyle: {
    borderRadius: 15,
  },

  teamContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent:'center',
    alignItems:"center",
  },
  matchInfo: {},
  minutes: {
    textAlign: "center",
    fontSize: 30,
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.bold,
  },
  score: {
    textAlign: "center",
    fontSize: theme.typography.fontSize.medium,
    color: theme.colors.background,
  },
  teamName: {
    marginVertical: theme.spacing.small,
    textAlign: "center",
    height:35,
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.regular,
    fontSize:13,
    width: 100,
  },
  matchInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },

  oddsInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    marginVertical: theme.spacing.small,
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  odd: {
    fontSize: 8,
    color: theme.colors.background,
  },
  oddContainer: {
    borderRadius: 8,
    backgroundColor: "#ab4fa5",
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.smaller,
    marginHorizontal: theme.spacing.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  times: {
    color: theme.colors.green,
    fontSize: theme.typography.fontSize.smaller,
  },
  borderRight: {
    width: 2,
    backgroundColor: theme.colors.secondary,
  },
});

export default styles;
