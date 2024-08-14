import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
const NotificationScreen = ({navigation}) => {
  const [active, setActive] = useState('all');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 45,
            width: 45,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{height: 45, width: 45}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 14,
            fontFamily: Theme.fontFamily.bold,
          }}>
          Notification
        </Text>
        <View style={{height: 45, width: 45}}>
          <Image
            source={require('../../../assets/icons/setting.png')}
            style={{height: 45, width: 45}}
          />
        </View>
      </View>

      <Text
        style={{
          color: Theme.colors.whiteColor,
          fontSize: 18,
          fontFamily: Theme.fontFamily.exbold,
          marginTop: 20,
          marginLeft: '5%',
        }}>
        Newest
      </Text>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'white',

          marginTop: 20,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
      
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: Theme.colors.primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Text
          style={{
            color: '#FFFF',
            fontSize: 14,
            width: '60%',
            fontFamily: Theme.fontFamily.semibold,marginLeft: '2.5%'
          }}
          numberOfLines={2}>
          Reminder! Get ready for your appointment at 9am
        </Text>

        <View style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
         

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
             
            }}>
            Just Now
          </Text>
          <View style={{height:8,width:8,borderRadius:5,backgroundColor:Theme.colors.sky, marginTop: 8,}}/>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'white',

          marginTop: 10,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
      
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: Theme.colors.primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Text
          style={{
            color: '#FFFF',
            fontSize: 14,
            width: '60%',
            fontFamily: Theme.fontFamily.semibold,marginLeft: '2.5%'
          }}
          numberOfLines={2}>
          Reminder! Get ready for your appointment at 9am
        </Text>

        <View style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
         

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
             
            }}>
            Just Now
          </Text>
          <View style={{height:8,width:8,borderRadius:5,backgroundColor:Theme.colors.sky, marginTop: 8,}}/>
        </View>
      </View>
      <Text
        style={{
          color: Theme.colors.whiteColor,
          fontSize: 18,
          fontFamily: Theme.fontFamily.exbold,
          marginTop: 20,
          marginLeft: '5%',
        }}>
        Oldest
      </Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'white',

          marginTop: 20,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
      
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: Theme.colors.primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Text
          style={{
            color: '#FFFF',
            fontSize: 14,
            width: '60%',
            fontFamily: Theme.fontFamily.semibold,marginLeft: '2.5%'
          }}
          numberOfLines={2}>
          Reminder! Get ready for your appointment at 9am
        </Text>

        <View style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
         

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
             
            }}>
            Just Now
          </Text>
          <View style={{height:8,width:8,borderRadius:5,backgroundColor:Theme.colors.sky, marginTop: 8,}}/>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'white',

          marginTop: 10,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
      
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: Theme.colors.primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Text
          style={{
            color: '#FFFF',
            fontSize: 14,
            width: '60%',
            fontFamily: Theme.fontFamily.semibold,marginLeft: '2.5%'
          }}
          numberOfLines={2}>
          Reminder! Get ready for your appointment at 9am
        </Text>

        <View style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
         

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
             
            }}>
            Just Now
          </Text>
          <View style={{height:8,width:8,borderRadius:5,backgroundColor:Theme.colors.sky, marginTop: 8,}}/>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
