import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,ScrollView,
  ImageBackground,
} from 'react-native';
import Theme from '../../../Theme/Theme';
const ProfileScreen = ({navigation}) => {
  const [active, setActive] = useState('all');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      <Text
        style={{
          color: Theme.colors.whiteColor,
          fontSize: 24,
          fontFamily: Theme.fontFamily.exbold,
          marginLeft: '5%',
          marginTop: 20,
        }}>
        Profile
      </Text>
      <ScrollView contentContainerStyle={{paddingBottom:80}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: '100%',
         
          paddingHorizontal: '5%',
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 100,
          marginTop: 20,
        }}>
        <Image
          source={require('../../../assets/images/dummy.png')}
          style={{height: 80, width: 80}}
        />
        <View style={{marginLeft: '2.5%',width:"55%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Aena Khalid
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
            anniemelfisa92@gmail.com
          </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')} style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color: Theme.colors.primaryColor,
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
         backgroundColor:Theme.colors.primaryColor,borderRadius:10,alignSelf:"center",
          paddingHorizontal: '2.5%',
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 100,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/icons/profile.png')}
          style={{height: 70, width: 70,resizeMode:"contain"}}
        />
        <View style={{marginLeft: '2.5%',width:"55%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Complete Your Profile
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
            Vel nulla libero arcu nisi pellentesque
          </Text>
        </View>
        <View style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color: Theme.colors.primaryColor,
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:Theme.colors.sky}} />
        </View>
      </View>
      <View
        style={{
          width: '90%',
        alignSelf:"center",
      borderBottomColor:"white",borderBottomWidth:1,
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 80,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/icons/location.png')}
          style={{height: 24, width: 24,resizeMode:"contain"}}
        />
        <View style={{marginLeft: '2.5%',width:"72%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
           Manage Address
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
           Can add and create new address
          </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('address')} style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color:"transparent",
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:"#B9B9B9"}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
        alignSelf:"center",
      borderBottomColor:"white",borderBottomWidth:1,
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 80,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/icons/user.png')}
          style={{height: 24, width: 24,resizeMode:"contain",tintColor:"white"}}
        />
        <View style={{marginLeft: '2.5%',width:"72%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
       Payment Methods
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
         Method for your transaction
          </Text>
        </View>
        <View style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color:"transparent",
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:"#B9B9B9"}} />
        </View>
      </View>
      <View
        style={{
          width: '90%',
        alignSelf:"center",
      borderBottomColor:"white",borderBottomWidth:1,
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 80,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/icons/receipt.png')}
          style={{height: 24, width: 24,resizeMode:"contain",tintColor:"white"}}
        />
        <View style={{marginLeft: '2.5%',width:"72%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
      Transaction History
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
       All your transaction will appear here
          </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('payment')} style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color:"transparent",
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:"#B9B9B9"}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
        alignSelf:"center",
      borderBottomColor:"white",borderBottomWidth:1,
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 80,
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assets/icons/about.png')}
          style={{height: 24, width: 24,resizeMode:"contain",tintColor:"white"}}
        />
        <View style={{marginLeft: '2.5%',width:"72%"}}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
    About
          </Text>

          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
            }}>
       AppName 1.2
          </Text>
        </View>
        <View style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color:"transparent",
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:"#B9B9B9"}} />
        </View>
      </View>
      <View
        style={{
          width: '90%',
        alignSelf:"center",
          flexDirection: 'row',
          alignItems: 'center',justifyContent:"space-between",
          height: 60,
        
        }}>
        <Image
          source={require('../../../assets/icons/logout.png')}
          style={{height: 24, width: 24,resizeMode:"contain",}}
        />
        <View style={{marginLeft: '2.5%',width:"72%"}}>
          <Text
            style={{
              color: '#FF4B32',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
    Logout
          </Text>

         
        </View>
        <View style={{marginLeft: '2.5%',flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
          <Text
            style={{
              color:"transparent",
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              marginRight:5,
            }}>
            Edit
          </Text>
          <Image source={require('../../../assets/icons/right.png')} style={{height:15,width:15,tintColor:"#B9B9B9"}} />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
