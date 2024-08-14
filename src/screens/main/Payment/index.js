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
const PaymentScreen = ({navigation}) => {
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
          Payment Method
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
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            marginTop: 30,
          }}>
          <Image
            source={require('../../../assets/images/visa.png')}
            style={{height: 40, width: 50, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: '2.5%', width: '60%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              VISA
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Recently used this wallet
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginLeft: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: 'transparent',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginRight: 5,
              }}>
              Edit
            </Text>
            <Image
              source={require('../../../assets/icons/right.png')}
              style={{height: 15, width: 15, tintColor: '#B9B9B9'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/images/master.png')}
            style={{height: 40, width: 50, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: '2.5%', width: '60%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
             Mastercard
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Connect to wallet
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginLeft: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: 'transparent',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginRight: 5,
              }}>
              Edit
            </Text>
            <Image
              source={require('../../../assets/icons/right.png')}
              style={{height: 15, width: 15, tintColor: '#B9B9B9'}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          bottom: 20,
          position: 'absolute',
        }}>
        <Button title={'Add Payment Method'} onPress={()=> navigation.navigate('addcard')} />
      </View>
    </View>
  );
};

export default PaymentScreen;
