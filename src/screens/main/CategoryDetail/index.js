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
const CategoryDetail = ({navigation}) => {
  const [active, setActive] = useState('all');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Image
        source={require('../../../assets/images/bg1.png')}
        style={{height: '100%', width: '100%', position: 'absolute'}}
      />
      <View
        style={{
          height: 80,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrowleft" type="antdesign" color={'white'} size={20} />
        </TouchableOpacity>
        <View style={{width: '80%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Hair Salon
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.medium,
            }}>
            More than 100+ hair salons near by you
          </Text>
        </View>
      </View>

      <View
        style={{height: 50, width: '90%', alignSelf: 'center', marginTop: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              height: 35,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
             marginRight:10,
              borderWidth: 1,
              borderColor: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginRight: 5,
              }}>
              Gender
            </Text>
            <Icon
              name="chevron-small-down"
              type="entypo"
              color={'white'}
              size={16}
            />
          </View>
          <View
            style={{
              height: 35,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
             marginRight:10,
              borderWidth: 1,
              borderColor: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginRight: 5,
              }}>
            Price
            </Text>
            <Icon
              name="chevron-small-down"
              type="entypo"
              color={'white'}
              size={16}
            />
          </View>
          <View
            style={{
              height: 35,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
             marginRight:10,
              borderWidth: 1,
              borderColor: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginRight: 5,
              }}>
            Location
            </Text>
            <Icon
              name="chevron-small-down"
              type="entypo"
              color={'white'}
              size={16}
            />
          </View>
          <View
            style={{
              height: 35,
              width: 120,
              alignItems: 'center',
              justifyContent: 'center',
             marginRight:10,
              borderWidth: 1,
              borderColor: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginRight: 5,
              }}>
            Special Offers
            </Text>
            <Icon
              name="chevron-small-down"
              type="entypo"
              color={'white'}
              size={16}
            />
          </View>
        </ScrollView>
      </View>

      {/*  */}
      <View
        style={{
          height: '40%',
          width: '90%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 30,
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: Theme.fontFamily.exbold,
            }}>
          Nearest Barbershop
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
            }}>
           
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('productdetail')}
          style={{
            width: '100%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 10,
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            backgroundColor: 'rgba(0,0,0,0.4)',
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
                  style={{height: 20, width: 20, tintColor: '#F9CB9F'}}
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 20, width: 20, tintColor: '#FC8838'}}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('productdetail')}
          style={{
            width: '100%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 10,
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            backgroundColor: 'rgba(0,0,0,0.4)',
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
                  style={{height: 20, width: 20, tintColor: '#F9CB9F'}}
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 20, width: 20, tintColor: '#FC8838'}}
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryDetail;
