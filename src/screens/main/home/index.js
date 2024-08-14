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
const HomeScreen = ({navigation}) => {
  const [active, setActive] = useState('all');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Image
        source={require('../../../assets/images/home.png')}
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
        <Image
          source={require('../../../assets/images/dummy.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: Theme.fontFamily.bold,
            }}>
            Good Morning,
          </Text>

          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Aena Khalid
          </Text>
        </View>

        <View style={{width: 80}}></View>
        <Icon
          name="search1"
          type="antdesign"
          color={'white'}
          size={24}
          onPress={() => navigation.navigate('search')}
        />
        <Icon name="menu" type="feather" color={'white'} size={24} />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontFamily: Theme.fontFamily.exbold,
          marginLeft: '5%',
        }}>
        What service are you looking for?
      </Text>
      <View
        style={{height: 70, width: '90%', alignSelf: 'center', marginTop: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate('categorydetail')}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              source={require('../../../assets/images/food.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.bold,
                marginTop: 5,
              }}>
              Food
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('categorydetail')}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              source={require('../../../assets/images/hair.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.bold,
                marginTop: 5,
              }}>
              Hair
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('categorydetail')}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              source={require('../../../assets/images/lawn.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.bold,
                marginTop: 5,
              }}>
              Lawn Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('categorydetail')}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              source={require('../../../assets/images/transport.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.bold,
                marginTop: 5,
              }}>
              Transportation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('categorydetail')}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              source={require('../../../assets/images/sale.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.bold,
                marginTop: 5,
              }}>
              For Sale
            </Text>
          </TouchableOpacity>
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
            Recent Visited
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            View All
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

export default HomeScreen;
