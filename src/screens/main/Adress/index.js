import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button/Button';
import {Icon} from '@rneui/themed';
const AdressScreen = ({navigation}) => {
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
          height: 60,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 10,
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
            fontFamily: Theme.fontFamily.exbold,
          }}>
          Address
        </Text>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,

            alignItems: 'center',
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 50,
            width: '90%',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'white',
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Icon name="search1" type="antdesign" color={'#B9B9B9'} size={24} />
          <TextInput
            placeholder="Find address"
            placeholderTextColor={'#B9B9B9'}
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              width: '80%',
            }}
          />
          <Image
            source={require('../../../assets/icons/map.png')}
            style={{height: 30, width: 30}}
          />
        </View>
        <View
          style={{
            height: 5,
            width: '100%',
            backgroundColor: Theme.colors.sky,
            marginTop: 30,
          }}></View>
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 18,
            fontFamily: Theme.fontFamily.exbold,
            marginTop: 20,
            marginLeft: '5%',
          }}>
          Active Address
        </Text>

        <View
          style={{
            height: 210,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#B2BDB5',
            borderRadius: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: 80,
              paddingHorizontal: '5%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/icons/location.png')}
              style={{
                height: 24,
                width: 24,
                tintColor: Theme.colors.primaryColor,
                resizeMode: 'contain',
              }}
            />
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
                Aena Khalid
              </Text>

              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                }}>
                (907) 225-4144
              </Text>
            </View>
            <View
              style={{
                height: 35,
                width: 110,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(73, 157, 47, 0.2)',
              }}>
              <Text
                style={{
                  color: '#499D2F',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Main Address
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomColor: '#B2BDB5',
              borderBottomWidth: 1,
              paddingHorizontal: '5%',
              flexDirection: 'row',

              height: 60,
            }}>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
              }}>
              4821 Ridge Top Cir, Anchorage, Alaska 99508, United States America
            </Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              paddingHorizontal: '5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 40,
                width: '85%',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: Theme.colors.primaryColor,
              }}>
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Edit Address
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: Theme.colors.primaryColor,
              }}>
              <Image
                source={require('../../../assets/icons/trash.png')}
                style={{height: 20, width: 20}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{width:"90%",alignSelf:"center",bottom:20,position:"absolute"}}>
        <Button title={'Select Address'}/>
      </View>
    </View>
  );
};

export default AdressScreen;
