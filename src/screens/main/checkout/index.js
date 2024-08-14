import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const CheckoutScreen = ({navigation}) => {
  const [active, setActive] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const renderDay = day => {
    const isSunday = new Date(day.dateString).getDay() === 0;
    return (
      <TouchableOpacity onPress={() => onDayPress(day)}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Theme.fontFamily.semibold,
              color: isSunday ? 'red' : Theme.colors.textColor, // Change 'red' to your desired Sunday color
            }}>
            {day.day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
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
          Request to Book
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
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            marginTop: 20,
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../../assets/images/bookImg.png')}
            style={{height: 80, width: 80}}
          />
          <View style={{marginLeft: '2.5%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Famous Barbershop
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              4140 Parker Rd. Allentown, New Mexi...
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/icons/clock.png')}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#B9B9B9',
                  }}>
                  7 Am - 11 Pm
                </Text>
              </View>
              <View
                style={{
                  height: 5,
                  width: 5,
                  backgroundColor: 'white',
                  borderRadius: 3,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 20, width: 20}}
                />

                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.bold,
                    color: 'white',
                  }}>
                  4.8{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Theme.fontFamily.regular,
                      color: '#B9B9B9',
                    }}>
                    (2.9k)
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',

            borderRadius: 15,
            marginTop: 10,
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Haircut & Beard Grooming
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Rp 120.000
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 90,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: Theme.colors.primaryColor,
              flexDirection: 'row',
            }}>
            <Icon
              name="plus"
              type="antdesign"
              color={Theme.colors.primaryColor}
              size={16}
            />

            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 12,
                fontFamily: Theme.fontFamily.semibold,
                marginHorizontal: 10,
              }}>
              1
            </Text>
            <Icon
              name="minus"
              type="antdesign"
              color={Theme.colors.primaryColor}
              size={16}
            />
          </View>
        </View>
        <View
          style={{
            height: 5,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: Theme.colors.sky,
            marginTop: 20,
          }}></View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/icons/calendar.png')}
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              tintColor: Theme.colors.primaryColor,
            }}
          />
          <View style={{marginLeft: '2.5%', width: '72%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Select Date & Time
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Choose date & time to book
            </Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
            style={{
              marginLeft: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: 'transparent',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginRight: 5,
              }}>
              Edit
            </Text>
            <Image
              source={require('../../../assets/icons/right.png')}
              style={{height: 15, width: 15, tintColor: '#B9B9B9'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/icons/promo.png')}
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              tintColor: Theme.colors.primaryColor,
            }}
          />
          <View style={{marginLeft: '2.5%', width: '72%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Offers & Promo Code
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Let’s use it before it’s burnt
            </Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('promo')}
            style={{
              marginLeft: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: 'transparent',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginRight: 5,
              }}>
              Edit
            </Text>
            <Image
              source={require('../../../assets/icons/right.png')}
              style={{height: 15, width: 15, tintColor: '#B9B9B9'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 5,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: Theme.colors.sky,
          }}></View>
        <View
          style={{
            height: 30,
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Payment Method
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            View All
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 70,
          }}>
          <Image
            source={require('../../../assets/images/master.png')}
            style={{height: 40, width: 50, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: '2.5%', width: '60%'}}>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 14,
                fontFamily: Theme.fontFamily.exbold,
              }}>
              Mastercard
            </Text>

            <Text
              style={{
                color: '#B9B9B9',
                fontSize: 12,
                fontFamily: Theme.fontFamily.regular,
                marginTop: 5,
              }}>
              Connect to wallet
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginLeft: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: 'transparent',
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
                marginRight: 5,
              }}>
              Edit
            </Text>
            <Image
              source={require('../../../assets/icons/right.png')}
              style={{height: 15, width: 15, tintColor: '#B9B9B9'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 5,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: Theme.colors.sky,
          }}></View>
        <View
          style={{
            width: '90%',

            marginHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Item Total
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 160.00
          </Text>
        </View>
        <View
          style={{
            width: '90%',

            marginHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Coupon Discount
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 0
          </Text>
        </View>

        <View
          style={{
            width: '100%',

            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
          }}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Amount Payable
          </Text>

          <Text
            style={{
              color: '#FFFF',
              fontSize: 14,
              fontFamily: Theme.fontFamily.exbold,
            }}>
            Rp 160.00
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
          <Button
            title={'Checkout Now'}
            onPress={() => setModalVisible1(!modalVisible1)}
          />
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
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: 'black',
              height: '85%',
              position: 'absolute',
              bottom: 0,
              width: '100%',
              alignItems: 'center',
              shadowColor: '#ffff',
              shadowOffset: {
                width: 10,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 20,
            }}>
            <View
              style={{
                height: 4,
                width: 80,
                backgroundColor: '#D8DBE5',
                marginTop: 10,
                borderRadius: 2,
              }}></View>

            <View
              style={{
                height: 30,
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
                Select Date & Time
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                }}></Text>
            </View>
            <View style={{height: 300, width: '90%', alignSelf: 'center'}}>
            <Calendar
              style={{
                height: 300,
              }}
              // dayComponent={({date, state}) => renderDay(date, state)}
              // renderHeader={(date) => renderHeader(date)}

              dayTextStyle={{
                fontSize: 14,
                fontFamily: Theme.fontFamily.semibold,
              }}
              theme={{
                backgroundColor: 'black',
                calendarBackground: 'black',
                textSectionTitleColor: 'white',
                selectedDayBackgroundColor: Theme.colors.primaryColor,
                selectedDayTextColor: Theme.colors.primaryColor,
                todayTextColor: Theme.colors.primaryColor,
                dayTextColor: Theme.colors.textColor,
                textDisabledColor: 'white',
                monthTextColor: 'white',
                textMonthFontFamily: Theme.fontFamily.semibold,
                textMonthFontSize: 14,
                arrowColor: 'white',
              }}
              // markedDates={{
              //   [selected]: {
              //     selected: true,
              //     disableTouchEvent: true,
              //     selectedDotColor: 'orange',
              //   },
              // }}
              onDayPress={day => {
                console.log('selected day', day);
               
              }}
            />
          </View>
            <View
              style={{
                height: 30,
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: Theme.fontFamily.exbold,
                }}>
                Time for the appointment
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                }}></Text>
            </View>
            <View
              style={{
                height: 40,
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  height: 40,
                  width: '45%',
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.medium,
                  }}>
                  10:00 PM
                </Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: '45%',
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: Theme.fontFamily.medium,
                  }}>
                  02:30 PM
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: '90%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Or input manual
              </Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
              <Button title={'Confirm'} onPress={()=> {setModalVisible(false)}} />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
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
              Booking Successful!
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Theme.fontFamily.regular,
                color: '#B9B9B9',
                width: '95%',
                textAlign: 'center',
              }}>
              Placerat tortor dictum pellentesque nibh vitae. Justo tincidunt et sit commodo porttitor purus.
            </Text>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 40}}>
              <Button title={'Done'} onPress={()=> {navigation.navigate('bookingitem');setModalVisible1(false);}} />
              <TouchableOpacity onPress={()=> {navigation.navigate('home');setModalVisible1(false);}}
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

export default CheckoutScreen;
