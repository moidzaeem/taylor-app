import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Button from '../../../components/Button/Button';
const Onboarding3 = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <Image
        source={require('../../../assets/images/3.png')}
        style={{height: '100%', width: '100%', position: 'absolute'}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          //   backgroundColor: 'rgba(185, 185, 185, 0.2)',
        }}>
        <View
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'black',

            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              height: 4,
              width: 80,
              backgroundColor: '#D8DBE5',
              marginTop: 10,
              borderRadius: 2,
            }}></View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: Theme.fontFamily.exbold,
              color: Theme.colors.whiteColor,
              marginTop: 20,
            }}>
          Beauty and wellness experts
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              color: '#B9B9B9',
              width: '95%',
              textAlign: 'center',
            }}>
           Lorem ipsum dolor sit amet consectetur. Sagittis massa faucibus volutpat viverra ut. Pharetra iaculis amet faucibus praesent eros faucibus.
          </Text>
          <View style={{height:10,width:50,alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:30}}>
            <View style={{height:10,width:10,borderRadius:6,backgroundColor:Theme.colors.primaryColor}}></View>
            <View style={{height:10,width:10,borderRadius:6,backgroundColor:Theme.colors.primaryColor}}></View>
            <View style={{height:10,width:10,borderRadius:6,backgroundColor:Theme.colors.primaryColor}}></View>
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
            <Button title={'Continue'} onPress={()=> navigation.navigate('login')} />
            <Pressable onPress={()=> navigation.navigate('login')}
              style={{
                height: 50,
                width: '100%',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                  color: 'white',
                }}>
                Skip
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default Onboarding3;
