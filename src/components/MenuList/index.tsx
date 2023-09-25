/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from "react";
import {MenuData, Menu} from "../../utils/MenuTypeList";
import {FlatList, SafeAreaView, TouchableOpacity, Text} from "react-native";
import styles from "./styles";

interface MenuListProps {
  onSelect: (menu: MenuData) => void;
}

function MenuList({onSelect}: MenuListProps) {
  const [selectedMenu, setSelectedMenu] = useState<string>("Summary");
  const renderItem = (item: MenuData) => {
    const isSelected = item.title === selectedMenu;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedMenu(item.title);
          onSelect(item);
        }}>
        <Text
          style={[styles.menuItem, isSelected ? styles.selectedMenu : null]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.menu}>
      <FlatList
        data={Menu}
        horizontal={true}
        renderItem={({item}: {item: MenuData}) => renderItem(item)}
        keyExtractor={(item: MenuData) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default MenuList;
