import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {TouchableOpacity} from 'react-native';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button/Button';
const RegisterScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: 'white',
            fontFamily: Theme.fontFamily.exbold,
            marginTop: 10,
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
            marginTop: 5,
            fontSize: 14,
          }}>
          Please create account first before enjoy the features.
        </Text>

        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
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
          <Button
            title={'Create Account'}
            onPress={() => setModalVisible(true)}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View
              style={{height: 1.5, width: '35%', backgroundColor: 'white'}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
              }}>
              Or login using
            </Text>
            <View
              style={{height: 1.5, width: '35%', backgroundColor: 'white'}}
            />
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
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'rgba(185, 185, 185, 0.2)',
          }}>
          <View
            style={{
              width: '100%',
              height: '60%',
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
            <Image
              source={require('../../../assets/images/done.png')}
              style={{height: 100, width: 100, marginTop: 20}}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: Theme.fontFamily.exbold,
                color: Theme.colors.whiteColor,
                marginTop: 20,
              }}>
              Account Created Successfully
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Theme.fontFamily.regular,
                color: '#B9B9B9',
                width: '95%',
                textAlign: 'center',
              }}>
              Congratulation! You have success creating account. We have send
              you an email to verify your account.
            </Text>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 40}}>
              <Button title={'Verify Account'} />
              <TouchableOpacity onPress={()=> {navigation.navigate('home');setModalVisible(false);}}
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
                  Go to Homepage
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default RegisterScreen;
