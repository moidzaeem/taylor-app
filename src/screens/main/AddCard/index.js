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
const AddCard = ({navigation}) => {
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
          alignSelf: 'center',
          marginTop: 10,
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
          Add Payment Method
        </Text>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,

            alignItems: 'center',
            justifyContent: 'center',
          }}></TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
          <Input
            placeholder="Enter holder name"
            label={'Holder Name'}
            iconUrl={require('../../../assets/icons/user.png')}
          />
          <Input
            placeholder="0000  0000  0000  0000"
            label={'Card Number'}
            iconUrl={require('../../../assets/icons/card.png')}
            password
          />

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '48%'}}>
              <Input
                placeholder="00/00"
                label={'Expiry Date'}
                iconUrl={require('../../../assets/icons/card.png')}
              />
            </View>
            <View style={{width: '48%'}}>
              <Input
                placeholder="000"
                label={'CVV'}
                iconUrl={require('../../../assets/icons/card.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          bottom: 20,
          position: 'absolute',
        }}>
        <Button title={'Add Card'} />
      </View>
    </View>
  );
};

export default AddCard;
