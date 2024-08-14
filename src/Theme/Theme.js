import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: 'rgba(79, 158, 129, 1)',
    secondaryColor: 'rgba(255, 255, 255, 1)',
    lightgreen: '#009F93',
    sky:"#A3E4FF",
    green: '#28A745',
    yellow: '#F6CD7D',
    grey: '#B2B2B2',
    lightGrey: '#ebeded',
    whiteColor: '#ffff',
    darkgrey: '#979797',
    blueColor: '#4079AD',
    textColor: '#FFFF',
    textGrey:"#B9B9B9"
  },
  fontFamily: {
    light:'Manrope-Light',
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    semibold: 'Manrope-SemiBold',
    bold: 'Manrope-Bold',
    exbold: 'Manrope-ExtraBold',
    urdu: 'Jameel Noori Nastaleeq Kasheeda',
    
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
