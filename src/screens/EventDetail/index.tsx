/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, ImageBackground, TouchableOpacity} from "react-native";
import {useState} from "react";
import Header from "../../components/Header/Header";
import {EventType} from "../../utils/ReccomendationList";
import FootBallField from "../../assets/Images/Football_field.png";
import styles from "./styles";
import MenuList from "../../components/MenuList";
import {MenuData} from "../../utils/MenuTypeList";
import SummaryList from "../../components/SummaryList";
import MatchDetail from "../../components/MatchDetail";

interface EventDetailProp {
  event: EventType;
  onHideDetail: () => void;
}

function EventDetail({event, onHideDetail}: EventDetailProp) {
  const [selectedMenu, setSelectedMenu] = useState<string>("Summary");
  const [leagueSelected, setLeagueSelected] = useState<boolean>(true);

  //Triggerd when an item is selected from the MenuList Component
  const MenuSelected = (menu: MenuData) => {
    setSelectedMenu(menu.title);
  };

  //Triggerd when back is clicked from the Header Component
  const handleBack = () => {
    onHideDetail();
  };
  
  return (
    <View>
      <ImageBackground source={FootBallField}>
        <Header detailPage={true} onBack={handleBack} />
        <MatchDetail event={event} />
        <View style={styles.menuContainer}>
          <MenuList onSelect={MenuSelected} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                setLeagueSelected(!leagueSelected);
              }}>
              <Text
                style={[
                  styles.actionButton,
                  leagueSelected ? styles.selected : null,
                ]}>
                League
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLeagueSelected(!leagueSelected);
              }}>
              <Text
                style={[
                  styles.actionButton,
                  !leagueSelected ? styles.selected : null,
                ]}>
                Make Bet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {selectedMenu === "Summary" ? <SummaryList /> : <></>}
    </View>
  );
}

export default EventDetail;
