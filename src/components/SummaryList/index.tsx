/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, SafeAreaView, Text, View} from "react-native";
import SummaryHeader from "../SummaryTableHeader";
import {Summary, SummaryData} from "../../utils/SummaryList";
import styles from "./styles";

function SummaryList() {
  const renderSummary = (item: SummaryData) => {
    return (
      <View
        style={[
          styles.summaryItemContainer,
          {backgroundColor: item.id == 4 ? "#e5f9e9" : ""},
        ]}>
        <Text style={[styles.summaryItem, styles.idText]}>{item.id}</Text>
        <Text style={[styles.summaryItem, {width: 120, fontWeight: "bold"}]}>
          {item.club}
        </Text>
        <Text style={styles.summaryItem}>{item.PL}</Text>
        <Text style={styles.summaryItem}>{item.W}</Text>
        <Text style={styles.summaryItem}>{item.D}</Text>
        <Text style={styles.summaryItem}>{item.L}</Text>
        <Text style={styles.summaryItem}>{item.GD}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.menu, {height: 200}]}>
      <FlatList
        ListHeaderComponent={<SummaryHeader />}
        stickyHeaderHiddenOnScroll={true}
        data={Summary}
        renderItem={({item}: {item: SummaryData}) => renderSummary(item)}
        keyExtractor={(item: SummaryData) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default SummaryList;
