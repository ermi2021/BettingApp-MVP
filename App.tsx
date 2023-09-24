/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import {View} from "react-native";
import globalStyles from "./src/styles";

function App(): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <AppNavigator />
    </View>
  );
}

export default App;
