/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {useState} from "react";
import Header from "../../components/Header/Header";
import {RecomendedListType} from "../../utils/ReccomendationList";
import FootBallField from "../../assets/Images/Football_field.png";
import styles from "./styles";
import MenuList from "../../components/MenuList";
import {MenuData} from "../../utils/MenuTypeList";
import SummaryList from "../../components/SummaryList";
import MatchDetail from "../../components/MatchDetail";
interface EventDetailProp {
  event: RecomendedListType;
}

function EventDetail({event}: EventDetailProp) {
  const [selectedMenu, setSelectedMenu] = useState<string>("Summary");
  const [leagueSelected, setLeagueSelected] = useState<boolean>(true);

  const MenuSelected = (menu: MenuData) => {
    setSelectedMenu(menu.title);
  };

  return (
    <View>
      <ImageBackground source={FootBallField}>
        <Header detailPage={true} />
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
      {selectedMenu == "Summary" ? <SummaryList /> : <></>}
    </View>
  );
}

export default EventDetail;
