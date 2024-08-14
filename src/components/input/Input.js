import React from 'react';
import {View, Text, TextInput, StyleSheet,Image} from 'react-native';

import {Icon} from '@rneui/themed';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  error,
  password,
  withNotice,
  onChangeText,
  text,
  number,
  width,
  iconUrl,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  function formatPhoneNumber(value) {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  }

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? "red"
              : isFocused
              ? Theme.colors.primaryColor
              : 'white',
            alignItems: 'center',paddingHorizontal:"5%",
          },
        ]}>
        <Image source={iconUrl} style={{height:25,width:25}} />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          style={{
            color: Theme.colors.textColor,
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            width: '80%',marginLeft:5,
          }}
          placeholderTextColor={Theme.colors.textGrey}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ?  'eye-off-outline':'eye-outline' }
            size={24}
            color={'#B2B2B2'}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginLeft: 5,
    fontSize: 14,
    color: 'white',
    fontFamily: Theme.fontFamily.exbold,
    marginTop: 15,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    marginTop: 10,
  },
});

export default Input;
