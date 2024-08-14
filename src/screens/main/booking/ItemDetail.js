import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Button from '../../../components/Button/Button';
const BookingItem = ({navigation}) => {
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
          justifyContent: 'center',
          height: 60,
        }}>
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 24,
            fontFamily: Theme.fontFamily.exbold,
          }}>
          Receipt
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 15,
          marginTop: 20,
        }}>
        <View
          style={{
            width: '100%',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingHorizontal: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 100,
          }}>
          <Image
            source={require('../../../assets/images/bookImg.png')}
            style={{height: 80, width: 80}}
          />
          <View style={{marginLeft: '5%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Capricorn Barbershop & Salon
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              1x haircut + 1x facial
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',

            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
          }}>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Booking Date
            </Text>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              October 15,2023
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Appointment Time
            </Text>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              October 15,2023
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',

            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
           
            height: 80,
            borderBottomColor: '#B9B9B9',
            borderBottomWidth: 1,
            borderStyle: 'dashed',
          }}>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Queue Number
            </Text>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              42
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Payment Status
            </Text>
            <Text
              style={{
                color: '#499D2F',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Completed
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',

            marginHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Item Total
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 160.00
          </Text>
        </View>
        <View
          style={{
            width: '90%',

            marginHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Coupon Discount
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 0
          </Text>
        </View>
        <View
          style={{
            width: '100%',

            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Tax
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 10
          </Text>
        </View>
        <View
          style={{
            width: '100%',

            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
          }}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Amount Payable
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 170.00
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          bottom: 10,
          position: 'absolute',
        }}>
        <Button title={'Get PDF Print'} />
      </View>
    </View>
  );
};

export default BookingItem;
