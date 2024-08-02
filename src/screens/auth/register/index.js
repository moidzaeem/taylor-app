import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {TouchableOpacity} from 'react-native';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button/Button';
const RegisterScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          marginLeft: '5%',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/icons/back.png')}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: 'white',
          fontFamily: Theme.fontFamily.exbold,
          marginTop: 30,
          fontSize: 20,
          marginLeft: '5%',
        }}>
        Create New Account
      </Text>
      <Text
        style={{
          color: '#B9B9B9',
          fontFamily: Theme.fontFamily.regular,
          marginLeft: '5%',
          marginTop: 15,
          fontSize: 14,
        }}>
        Please create account first before enjoy the features.
      </Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
        <Input
          placeholder="Enter your name"
          label={'Full Name'}
          iconUrl={require('../../../assets/icons/user.png')}
        />

        <Input
          placeholder="Enter your email"
          label={'Email Address'}
          iconUrl={require('../../../assets/icons/sms.png')}
        />
        <Input
          placeholder="Enter your phone number"
          label={'Phone Number'}
          iconUrl={require('../../../assets/icons/call.png')}
        />
        <Input
          placeholder="Enter your password"
          label={'Password'}
          iconUrl={require('../../../assets/icons/lock.png')}
          password
        />
        <View style={{height: 20}} />
        <Button title={'Create Account'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View style={{height: 1.5, width: '35%', backgroundColor: 'white'}} />
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Or login using
          </Text>
          <View style={{height: 1.5, width: '35%', backgroundColor: 'white'}} />
        </View>
      </View>
      <View
        style={{
          height: 50,
          width: '90%',
          borderRadius: 30,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'white',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={require('../../../assets/icons/google.png')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: Theme.fontFamily.exbold,
            marginLeft: 10,
          }}>
          Login using Google
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: '90%',
          borderRadius: 30,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'white',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={require('../../../assets/icons/facebook.png')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: Theme.fontFamily.exbold,
            marginLeft: 10,
          }}>
          Login using Facebook
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default RegisterScreen;
