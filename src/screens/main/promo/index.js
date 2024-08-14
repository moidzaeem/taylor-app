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
const PromoScreen = ({navigation}) => {
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
          Offers & Promo Codes
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
            height: 52,
            width: '90%',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'white',
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '2.5%',
          }}>
          <TextInput
            placeholder="Enter the promotion code"
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              color: 'white',
              width: '85%',
            }}
            placeholderTextColor={'#BFBFBF'}
          />
          <Text
            style={{
              color: Theme.colors.primaryColor,
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Apply
          </Text>
        </View>
        <View
          style={{
            height: 5,
            width: '100%',
            backgroundColor: Theme.colors.sky,
            marginTop: 20,
          }}></View>
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 18,
            fontFamily: Theme.fontFamily.exbold,
            marginTop: 20,
            marginLeft: '5%',
          }}>
          My coupons
        </Text>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 20,
            height: 140,
          }}>
          <View
            style={{
              width: '100%',

              borderBottomColor: 'white',
              borderBottomWidth: 1,

              height: 90,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../../assets/icons/promo.png')}
              style={{height: 25, width: 25}}
            />
            <View style={{marginLeft: '2.5%', width: '85%'}}>
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
                Get cashback up to 20% at the first time transaction on using
                OVO
              </Text>

              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                }}>
                Expired in 22 February 2023
              </Text>
            </View>
          </View>
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginHorizontal: '5%',
              }}>
              This promo can be used only when using OVO
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 20,
            height: 140,
          }}>
          <View
            style={{
              width: '100%',

              borderBottomColor: 'white',
              borderBottomWidth: 1,

              height: 90,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../../assets/icons/promo.png')}
              style={{height: 25, width: 25,tintColor:"white"}}
            />
            <View style={{marginLeft: '2.5%', width: '85%'}}>
              <Text
                style={{
                  color:'white',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
              Get cashback up to 50% at the first time transaction on using DANA
              </Text>

              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                }}>
              Expired in 8 hours ago
              </Text>
            </View>
          </View>
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginHorizontal: '5%',
              }}>
              This promo can be used only when using DANA
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 20,
            height: 140,
          }}>
          <View
            style={{
              width: '100%',

              borderBottomColor: 'white',
              borderBottomWidth: 1,

              height: 90,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../../assets/icons/promo.png')}
              style={{height: 25, width: 25,tintColor:"white"}}
            />
            <View style={{marginLeft: '2.5%', width: '85%'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
              Get cashback up to 15% at the first time
transaction on Cash
              </Text>

              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                }}>
                No expired time
              </Text>
            </View>
          </View>
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginHorizontal: '5%',
              }}>
              This promo can be used only when using Cash
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PromoScreen;
