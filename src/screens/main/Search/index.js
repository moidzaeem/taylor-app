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
const SearchScreen = ({navigation}) => {
  const [active, setActive] = useState('all');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Image
        source={require('../../../assets/images/search1.png')}
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
          style={{height: 50, width: 50}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/back2.png')}
            style={{height: 45, width: 45}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: Theme.fontFamily.exbold,
          }}>
          Search
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/filter.png')}
            style={{height: 45, width: 45}}
          />
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
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '2.5%',
        }}>
        <Icon name="search1" type="antdesign" color={'white'} size={24} />
        <TextInput
          placeholder="What are you looking for"
          style={{
            fontSize: 14,
            fontFamily: Theme.fontFamily.regular,
            color: 'white',
            width: '90%',
          }}
          placeholderTextColor={'white'}
        />
      </View>

      {/*  */}
      <View
        style={{
          height: '30%',
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
            Your History
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            Clear All
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 35,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
              Famous Barber
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 120,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
              Beatrice Nail Arts
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <View
            style={{
              height: 35,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
             Barbershop
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
              Salon
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
            SPA
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
          SPA
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <View
            style={{
              height: 35,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
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
              }}>
             Nail Art
            </Text>
          </View>
        
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
