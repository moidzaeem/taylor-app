import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Theme from '../../../Theme/Theme';
const SplashScreen = ({navigation}) => {
  useEffect(() => {

      setTimeout(() => {
        navigation.replace('login');
      }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: Theme.colors.primaryColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primaryColor}
      />

      <Text
        style={{
          color: Theme.colors.whiteColor,
          fontSize: 40,
          fontFamily: Theme.fontFamily.bold,
        }}>
        LOGO
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default SplashScreen;
