/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import { theme } from "../../utils/theme";
const styles = StyleSheet.create({
 
  itemContainer:{
     backgroundColor:theme.colors.primary,
     marginHorizontal:theme.spacing.small,
     padding:theme.spacing.small,
     borderRadius:20,
     display:'flex',
     alignContent:'center',
     alignItems:'center',
     flexDirection:'row',
     justifyContent:'center',
     gap:15

  },
  itemName:{
    color:theme.colors.background,
    fontSize:theme.typography.fontSize.smaller
  },
  eventList:{
    width:theme.widthWithScreenSize.full,
    paddingVertical:theme.spacing.small
  },
 
});

export default styles;
