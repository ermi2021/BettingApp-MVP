/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {View, Text, ImageBackground, Image} from "react-native";
import styles from "./styles";
import FootballField from "../../assets/Images/Football_field.png"
import BackgroundGradient from "../../assets/Images/gradient_background.png";
import Odds from "../Odds";

function FeaturedEvent() {
  return (
    <ImageBackground
      imageStyle={styles.imageBgStyle}
      source={BackgroundGradient}
      resizeMode="cover"
      style={styles.feturedEventContainer}>
      <View style={styles.matchInfoContainer}>
        <View style={styles.teamContainer}>
          <Image style={styles.teamLogo} src={"https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-6-1200x750.png"} />
          <Text style={styles.teamName}>Manchester United</Text>
        </View>
        <View style={styles.matchInfo}>
          <Text style={styles.minutes}>43 : 22</Text>
          <Text style={styles.score}>0 : 2</Text>
        </View>
        <View style={styles.teamContainer}>
          <Image style={styles.teamLogo} src={"https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-4-1200x750.png"} />
          <Text style={styles.teamName}>Chelsea</Text>
        </View>
      </View>
      <Odds/>
    
    </ImageBackground>
  );
}

export default FeaturedEvent;
