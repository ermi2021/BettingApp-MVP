/* eslint-disable prettier/prettier */
import {FlatList, View, Text} from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/Ionicons";
import {EventList, EventType} from "../../utils/EventTypesList";
import {theme} from "../../utils/theme";

function renderItem(item: EventType) {
  return (
    <View style={styles.itemContainer}>
      <Icon name={item.icon} size={14} color={theme.colors.background} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );
}
function EventTypes() {
  return (
    <FlatList
      style={styles.eventList}
      horizontal={true}
      data={EventList}
      renderItem={({item}: {item: EventType}) => renderItem(item)} // Use object destructuring to access 'item'
      keyExtractor={item => item.id.toString()} // Convert 'id' to a string
    />
  );
}

export default EventTypes;
