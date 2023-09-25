/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {useState} from "react";
import Header from "../../components/Header/Header";
import {RecomendedListType} from "../../utils/ReccomendationList";
import FootBallField from "../../assets/Images/Football_field.png";
import styles from "./styles";
import Odds from "../../components/Odds";
interface EventDetailProp {
  event: RecomendedListType;
}

interface MenuData {
  id: number;
  title: string;
}
interface SummaryData {
  id: number;
  club: string;
  PL: number;
  W: number;
  D: number;
  L: number;
  GD: number;
}

const Summary: SummaryData[] = [
  {
    id: 1,
    club: "Arsenal",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 2,
    club: "Chelsea",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 4,
    club: "Manchester United",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 5,
    club: "Arsenal",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 6,
    club: "Chelsea",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 7,
    club: "Manchester United",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },

  {
    id: 8,
    club: "Manchester United",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 9,
    club: "Manchester United",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
  {
    id: 10,
    club: "Liverpool",
    PL: 20,
    W: 10,
    D: 5,
    L: 3,
    GD: 2,
  },
];
const Menu: MenuData[] = [
  {
    id: 1,
    title: "Summary",
  },
  {
    id: 2,
    title: "Line Up",
  },
  {
    id: 3,
    title: "Stats",
  },
  {
    id: 4,
    title: "H2H",
  },
  {
    id: 5,
    title: "Standings",
  },
];

function SummaryHeader() {
  return (
    <>
      <View style={styles.summaryItemContainer}>
        <Text style={[styles.summaryItem]}>#</Text>
        <Text style={[styles.summaryItem, {width: 120, fontWeight: "bold"}]}>
          Club
        </Text>
        <Text style={styles.summaryItem}>PL</Text>
        <Text style={styles.summaryItem}>W</Text>
        <Text style={styles.summaryItem}>D</Text>
        <Text style={styles.summaryItem}>L</Text>
        <Text style={styles.summaryItem}>GD</Text>
      </View>
      <View style={styles.divider} />
    </>
  );
}

function EventDetail({event}: EventDetailProp) {
  const [selectedMenu, setSelectedMenu] = useState<string>("Summary");
  const [leagueSelected, setLeagueSelected] = useState<boolean>(true);

  const renderItem = (item: MenuData) => {
    const isSelected = item.title === selectedMenu;

    return (
      <TouchableOpacity onPress={() => setSelectedMenu(item.title)}>
        <Text
          style={[styles.menuItem, isSelected ? styles.selectedMenu : null]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

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
    <View>
      <ImageBackground source={FootBallField}>
        <Header detailPage={true} />
        <View style={styles.matchDetailContainer}>
          <View style={styles.teamInfoContainer}>
            <View style={styles.teamsIconContainer}>
              <Image src={event.teamOneIcon} style={styles.teamIcon1} />
              <Image src={event.teamTwoIcon} style={styles.teamIcon2} />
            </View>
            <View style={styles.matchInfoCont}>
              <Text style={styles.teams}>{event.teams}</Text>
              {event.live && (
                <View style={styles.liveContainer}>
                  <View style={styles.liveCircle}></View>
                  <Text style={styles.live}>Live</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.matchDetailInfoContainer}>
            <Text style={styles.minute}>42:30</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>0</Text>
              <Text style={styles.teams}>:</Text>
              <Text style={styles.score}>2</Text>
            </View>
          </View>
          <Odds detailPage={true} />
        </View>
        <View style={styles.menuContainer}>
          <SafeAreaView style={styles.menu}>
            <FlatList
              data={Menu}
              horizontal={true}
              renderItem={({item}: {item: MenuData}) => renderItem(item)}
              keyExtractor={(item: MenuData) => item.id.toString()}
            />
          </SafeAreaView>
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

      <>
        {selectedMenu == "Summary" ? (
          <SafeAreaView style={[styles.menu, {height: 200}]}>
            <FlatList
              ListHeaderComponent={<SummaryHeader />}
              stickyHeaderHiddenOnScroll={true}
              data={Summary}
              renderItem={({item}: {item: SummaryData}) => renderSummary(item)}
              keyExtractor={(item: SummaryData) => item.id.toString()}
            />
          </SafeAreaView>
        ) : (
          <></>
        )}
      </>
    </View>
  );
}

export default EventDetail;
