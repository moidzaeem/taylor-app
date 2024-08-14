import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {TouchableOpacity} from 'react-native';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button/Button';
const LoginScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
      <Text
        style={{
          color: 'white',
          fontFamily: Theme.fontFamily.exbold,
          marginTop: 10,
          fontSize: 20,
          marginLeft: '5%',
        }}>
        Login to Your Account
      </Text>
      <Text
        style={{
          color: '#B9B9B9',
          fontFamily: Theme.fontFamily.regular,
          marginLeft: '5%',
          marginTop: 5,
          fontSize: 14,
        }}>
        Please log in to access your Shiny account.
      </Text>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <Input
          placeholder="Enter your email or phone number"
          label={'Email Address or Phone Number'}
          iconUrl={require('../../../assets/icons/sms.png')}
        />
        <Input
          placeholder="Enter your password"
          label={'Password'}
          iconUrl={require('../../../assets/icons/lock.png')}
          password
        />
        <Text
          style={{
            color: '#A3E4FF',
            fontFamily: Theme.fontFamily.exbold,
            alignSelf: 'flex-end',
            marginTop: 10,
            fontSize: 14,
            marginBottom: 30,
          }}>
          Forgot Passowrd?
        </Text>
        <Button title={'Login'} onPress={()=> navigation.navigate('home')} />

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
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          fontFamily: Theme.fontFamily.regular,
          marginTop: 10,
          alignSelf: 'center',
        }}>
        Don't Have an Account?{' '}
        <Text
          style={{
            color: Theme.colors.primaryColor,
            fontFamily: Theme.fontFamily.semibold,
          }}
          onPress={() => navigation.navigate('register')}>
          Signup
        </Text>
      </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default LoginScreen;
