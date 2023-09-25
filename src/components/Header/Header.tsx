/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import globalStyles from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome6";
import UserAvatar from "react-native-user-avatar";
import {theme} from "../../utils/theme";
interface HeaderProps {
  detailPage?: boolean;
}

function Header({detailPage}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          globalStyles.appTitle,
          styles.title,
          {
            color: detailPage ? theme.colors.background : theme.colors.primary,
          },
        ]}>
        PlaceIt
      </Text>
      <View style={styles.userInfoContainer}>
        <Icon style={styles.balanceIcon} size={10} name="dollar-sign" />
        <Text
          style={[
            styles.balance,
            {
              color: detailPage ? theme.colors.background : theme.colors.text,
            },
          ]}>
          22.34
        </Text>
        <TouchableOpacity style={styles.depositButton}>
          <Text style={styles.depositText}>Deposit</Text>
        </TouchableOpacity>
        <UserAvatar
          size={33}
          name="Ermiyas Zeleke"
          src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </View>
    </View>
  );
}

export default Header;
