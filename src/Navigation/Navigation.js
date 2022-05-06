import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Dimensions} from 'react-native';
import AccountScreen from '../Pages/AccountScreen';
import GifScreen from '../Pages/GifScreen';
import HomeScreen from '../Pages/HomeScreen';
// import SearchResultScreen from '../Pages/SearchResultScreen';
import SearchScreen from '../Pages/SearchScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//initializing navigation stack component
const Home_Stack = createNativeStackNavigator();
const Search_Stack = createNativeStackNavigator();
const Account_Stack = createNativeStackNavigator();
const Main_Stack = createBottomTabNavigator();

const {height, width} = Dimensions.get('window');

//defining the HomeStack component
export const HomeStack = () => {
  return (
    <Home_Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Home_Stack.Screen name="Home" component={HomeScreen} />
      <Home_Stack.Screen name="Gif" component={GifScreen} />
    </Home_Stack.Navigator>
  );
};

//defining the SearchStack Component
export const SearchStack = () => {
  return (
    <Search_Stack.Navigator
      initialRouteName="Search"
      screenOptions={{headerShown: false}}>
      <Search_Stack.Screen
        name="Search"
        component={SearchScreen}
        // initialParams={{search: ''}}
      />
      {/* <Search_Stack.Screen name="SearchResult" component={SearchResultScreen} /> */}
      <Search_Stack.Screen name="Gif" component={GifScreen} />
    </Search_Stack.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Account_Stack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <Account_Stack.Screen name="Account" component={AccountScreen} />
    </Account_Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Main_Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
          width,
          height: '8%',
          display: 'flex',
          flexDirection: 'row',
        },
      }}>
      <Main_Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <>
              <Octicons name="home" color={colors.secondaryColor} size={30} />
              {focused && (
                <View
                  style={{
                    backgroundColor: colors.secondaryColor,
                    width: 5,
                    height: 5,
                    marginTop: 2,
                    borderRadius: 5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}></View>
              )}
            </>
          ),
        }}
      />
      <Main_Stack.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <>
              <Octicons name="search" color={colors.primaryColor} size={30} />
              {focused && (
                <View
                  style={{
                    backgroundColor: colors.primaryColor,
                    width: 5,
                    height: 5,
                    marginTop: 2,
                    borderRadius: 5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}></View>
              )}
            </>
          ),
        }}
      />
      <Main_Stack.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <>
              <MaterialCommunityIcons
                name="account-outline"
                color={colors.secondaryColor}
                size={30}
              />
              {focused && (
                <View
                  style={{
                    backgroundColor: colors.secondaryColor,
                    width: 5,
                    height: 5,
                    marginTop: 2,
                    borderRadius: 5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}></View>
              )}
            </>
          ),
        }}
      />
    </Main_Stack.Navigator>
  );
};

export default MainStack;
