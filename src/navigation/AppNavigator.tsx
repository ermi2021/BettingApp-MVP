/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MyBets from "../screens/Bets";
import Account from "../screens/Account";
import News from "../screens/News";
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {theme} from "../utils/theme";

const Tab = createBottomTabNavigator();

function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        
        screenOptions={
          {tabBarStyle:{
          
            padding:5,
            paddingHorizontal:10
          }}
        }
      >
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.teritary,

            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name={focused ? "home" : "check"}
                color={color}
                size={size}
              />
            ),

            tabBarLabelStyle: {
              // color: theme.colors.secondary,
              marginBottom: 5,
            },
          }}
          component={Home}
        />
        <Tab.Screen
          name="Bets"
          options={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.teritary,
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name={focused ? "home" : "check"}
                color={color}
                size={size}
              />
            ),
            tabBarLabelStyle: {
              // color: theme.colors.secondary,
              marginBottom: 5,
            },
          }}
          component={MyBets}
        />
        <Tab.Screen
          name="News"
          options={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.teritary,
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name={focused ? "home" : "check"}
                color={color}
                size={size}
              />
            ),
            tabBarLabelStyle: {
              // color: theme.colors.secondary,
              marginBottom: 5,
            },
          }}
          component={News}
        />
        <Tab.Screen
          name="Account"
          options={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.teritary,
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name={focused ? "home" : "check"}
                color={color}
                size={size}
              />
            ),
            tabBarLabelStyle: {
              // color: theme.colors.secondary,
              marginBottom: 5,
            },
          }}
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
