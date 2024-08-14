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
const FavouriteScreen = ({navigation}) => {
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
          Favourite
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
          height: 52,
          width: '90%',
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'white',
          alignSelf: 'center',
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '2.5%',
        }}>
        <Icon name="search1" type="antdesign" color={'#BFBFBF'} size={24} />
        <TextInput
          placeholder="What are you looking for"
          style={{
            fontSize: 14,
            fontFamily: Theme.fontFamily.regular,
            color: 'white',
            width: '90%',
          }}
          placeholderTextColor={'#BFBFBF'}
        />
      </View>
      <Text
        style={{
          color: Theme.colors.whiteColor,
          fontSize: 18,
          fontFamily: Theme.fontFamily.exbold,
          marginTop: 20,
          marginLeft: '5%',
        }}>
        Recent Added
      </Text>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 15,
          marginTop: 20,
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../../assets/images/bookImg.png')}
          style={{height: 80, width: 80}}
        />
        <View style={{marginLeft: '2.5%'}}>
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
            4140 Parker Rd. Allentown, New Mexi...
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/clock.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  color: '#B9B9B9',
                }}>
                7 Am - 11 Pm
              </Text>
            </View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: 'white',
                borderRadius: 3,
              }}></View>
            <View style={{flexDirection: 'row', alignItems: 'center',width:"50%"}}>
              <Image
                source={require('../../../assets/icons/star.png')}
                style={{height: 20, width: 20}}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.bold,
                  color: 'white',
                }}>
                4.8{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#B9B9B9',
                  }}>
                  (2.9k)
                </Text>
              </Text>
            </View>
          </View>
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
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../../assets/images/bookImg2.png')}
          style={{height: 80, width: 80}}
        />
        <View style={{marginLeft: '2.5%'}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Highway Spa Centre
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
            4140 Parker Rd. Allentown, New Mexi...
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/clock.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  color: '#B9B9B9',
                }}>
                7 Am - 11 Pm
              </Text>
            </View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: 'white',
                borderRadius: 3,
              }}></View>
            <View style={{flexDirection: 'row', alignItems: 'center',width:"50%"}}>
              <Image
                source={require('../../../assets/icons/star.png')}
                style={{height: 20, width: 20}}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.bold,
                  color: 'white',
                }}>
                4.8{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#B9B9B9',
                  }}>
                  (2.9k)
                </Text>
              </Text>
            </View>
          </View>
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
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../../assets/images/bookImg3.png')}
          style={{height: 80, width: 80}}
        />
        <View style={{marginLeft: '2.5%'}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
          Nautilus Nail Art
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
            4140 Parker Rd. Allentown, New Mexi...
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/clock.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.regular,
                  color: '#B9B9B9',
                }}>
                10 Am - 7 Pm
              </Text>
            </View>
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: 'white',
                borderRadius: 3,
              }}></View>
            <View style={{flexDirection: 'row', alignItems: 'center',width:"50%"}}>
              <Image
                source={require('../../../assets/icons/star.png')}
                style={{height: 20, width: 20}}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.bold,
                  color: 'white',
                }}>
                4.8{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#B9B9B9',
                  }}>
                  (2.9k)
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavouriteScreen;
