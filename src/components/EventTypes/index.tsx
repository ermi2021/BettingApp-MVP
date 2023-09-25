/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";

import {EventList} from "../../utils/EventTypesList";
import {theme} from "../../utils/theme";

import {Event} from "../../utils/EventTypesList";

interface EventTypesProp {
  onSelect: (event: Event) => void;
}

function EventTypes({onSelect}: EventTypesProp) {
  const [selectedType, setSelectedType] = useState<string>("Football");
  const renderItem = (item: Event) => {
    const isSelected = item.name === selectedType;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, isSelected ? styles.selected : null]}
        onPress={() => {
          setSelectedType(item.name);
          onSelect(item);
        }}>
        <Icon
          name={item.icon}
          size={14}
          color={isSelected ? theme.colors.background : theme.colors.text}
        />
        <Text
          style={[
            styles.itemName,
            isSelected ? styles.selectedItemName : null,
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.eventList}
      horizontal={true}
      data={EventList}
      renderItem={({item}: {item: Event}) => renderItem(item)} // Use object destructuring to access 'item'
      keyExtractor={item => item.id.toString()} // Convert 'id' to a string
    />
  );
}

export default EventTypes;
