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
} from 'react-native';
import Theme from '../../../Theme/Theme';
const BookingScreen = ({navigation}) => {
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
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 24,
            fontFamily: Theme.fontFamily.exbold,
          }}>
          Your Bookings
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('notifications')} style={{height: 45, width: 45}}>
          <Image
            source={require('../../../assets/icons/bell.png')}
            style={{height: 45, width: 45}}
          />
          <View
            style={{
              height: 16,
              width: 16,
              backgroundColor: 'red',
              position: 'absolute',
              right: 2,
              borderRadius: 8,
              top: -6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: Theme.fontFamily.medium,
                color: 'black',
              }}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 60,
          width: '90%',
          borderRadius: 30,
          backgroundColor: '#B9B9B9',
          alignSelf: 'center',
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity
          onPress={() => setActive('all')}
          style={{
            height: 50,
            width: 100,
            backgroundColor: active === 'all' ? 'black' : '#B9B9B9',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              color: active === 'all' ? Theme.colors.primaryColor : 'white',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive('upcoming')}
          style={{
            height: 50,
            width: 110,
            backgroundColor: active === 'upcoming' ? 'black' : '#B9B9B9',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              color:
                active === 'upcoming' ? Theme.colors.primaryColor : 'white',
            }}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive('past')}
          style={{
            height: 50,
            width: 100,
            backgroundColor: active === 'past' ? 'black' : '#B9B9B9',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              color: active === 'past' ? Theme.colors.primaryColor : 'white',
            }}>
            Past
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:80}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: 230,
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
            height: 60,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingHorizontal: '5%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            22 Jan 2023
          </Text>
          <View
            style={{
              height: 35,
              width: 90,
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
              Completed
            </Text>
          </View>
        </View>
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
            height: 70,
            width: '100%',
            paddingHorizontal: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
              }}>
              Total Payment
            </Text>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Rp 120.00
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 130,
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
              Reorder Booking
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 230,
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
            height: 60,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingHorizontal: '5%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            22 Jan 2023
          </Text>
          <View
            style={{
              height: 35,
              width: 90,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#A3E4FF',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontFamily: Theme.fontFamily.semibold,
              }}>
              Ongoing
            </Text>
          </View>
        </View>
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
            height: 70,
            width: '100%',
            paddingHorizontal: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
              }}>
              Total Payment
            </Text>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Rp 120.00
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 130,
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
              Cancel Booking
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default BookingScreen;
