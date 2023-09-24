/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    padding: theme.spacing.large,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    alignContent:"center"

  },
  title:{
    flex:1,
  },
  userInfoContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:"center",
    alignItems:'center',
    gap:10,
  },
  balance:{
    fontSize:theme.typography.fontSize.smaller,
    color:theme.colors.text,
    fontWeight:theme.typography.fontWeight.regular,
    
  },
  balanceIcon:{
      backgroundColor:theme.colors.balanceIconBackground,
      color:theme.colors.text,
      padding:5,
      paddingHorizontal:7,
      borderRadius:60,
  },
  depositButton:{
    borderRadius:20,
    paddingVertical:3,
    paddingHorizontal:10,
    backgroundColor:theme.colors.primary
  },
  depositText:{
    color:theme.colors.background,
    fontSize:theme.typography.fontSize.smaller,
  }

});

export default styles;
