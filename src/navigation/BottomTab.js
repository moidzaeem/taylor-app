import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/home';
import BookingScreen from '../screens/main/booking';
import FavouriteScreen from '../screens/main/favourite';
import ProfileScreen from '../screens/main/profile';
import Theme from '../Theme/Theme';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: Theme.colors.sky,
          borderTopWidth: 2,

          height: 70,

          width: '100%',
        },
      }}>
      <Tab.Screen
        name="Discover"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/discover.png')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 5,
                  
                  }}
                />
                <Text
                  style={{
                    color: Theme.colors.primaryColor,
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  Discover
                </Text>
              </View>
            ) : (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/discover1.png')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                   
                    marginBottom: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#858585',
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  Discover
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/booking1.png')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 5,
                    tintColor: Theme.colors.primaryColor,
                  }}
                />
                <Text
                  style={{
                    color: Theme.colors.primaryColor,
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  Booking
                </Text>
              </View>
            ) : (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/booking1.png')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: '#858585',
                    marginBottom: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#858585',
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  Booking
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/bottom/heart1.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 5,
                  tintColor: Theme.colors.primaryColor,
                }}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                Favourite
              </Text>
            </View>
          ) : (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/bottom/heart1.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#858585',
                  marginBottom: 5,
                }}
              />
              <Text
                style={{
                  color: '#858585',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                Favourite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/bottom/profile1.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 5,
                  tintColor: Theme.colors.primaryColor,
                }}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                Profile
              </Text>
            </View>
          ) : (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/bottom/profile1.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#858585',
                  marginBottom: 5,
                }}
              />
              <Text
                style={{
                  color: '#858585',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
