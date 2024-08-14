import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,ScrollView
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button/Button';
const EditProfile = ({navigation}) => {
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
          height: 60,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignSelf: 'center',marginTop:10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 45,
            width: 45,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{height: 45, width: 45}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: Theme.colors.whiteColor,
            fontSize: 14,
            fontFamily: Theme.fontFamily.exbold,
          }}>
          Edit Profile
        </Text>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,

            alignItems: 'center',
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>

      <Image
        source={require('../../../assets/images/dummy.png')}
        style={{height: 90, width: 90,alignSelf:"center",marginTop:30}}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        

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
          <View style={{height: 100}} />
          <Button
            title={'Save Changes'}
            onPress={() => navigation.goBack()}
          />

        
        </View>
       
      </ScrollView>
    </View>
  );
};

export default EditProfile;
