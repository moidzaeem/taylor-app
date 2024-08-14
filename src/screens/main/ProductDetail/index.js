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
const ProductDetail = ({navigation}) => {
  const [active, setActive] = useState('package');

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={{height: 200, width: '100%'}}>
          <Image
            source={require('../../../assets/images/product.png')}
            style={{height: '100%', width: '100%', position: 'absolute'}}
          />
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}>
              <Image
                source={require('../../../assets/icons/back1.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}>
              <Image
                source={require('../../../assets/icons/heart.png')}
                style={{height: 30, width: 30}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            top: -30,
            backgroundColor: 'black',
          }}>
          <Text
            style={{
              color: '#FFFF',
              fontSize: 20,
              fontFamily: Theme.fontFamily.exbold,
              marginLeft: '5%',
              marginTop: 20,
            }}>
            Capricorn Barbershop & Salon
          </Text>
          <Text
            style={{
              color: '#B9B9B9',
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              marginTop: 5,
              marginHorizontal: '5%',
            }}>
            4140 Parker Rd. Allentown, New Mexico 31134
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              width: '70%',
              marginLeft: '5%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/clock.png')}
                style={{height: 20, width: 20, tintColor: '#499D2F'}}
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
                style={{height: 20, width: 20, tintColor: '#FC8838'}}
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
          <View
            style={{
              height: 2,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: 'white',
              marginTop: 20,
            }}></View>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                height: 60,
                width: '20%',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/website.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
                Website
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/call.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: Theme.colors.primaryColor,
                }}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
                Call
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/map.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
                Direction
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: '20%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/share.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 5,
                }}>
                Share
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 4,
              width: '100%',
              alignSelf: 'center',
              backgroundColor: Theme.colors.sky,
              marginTop: 30,
            }}></View>
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                color:
                  active === 'package' ? Theme.colors.primaryColor : '#9A9A9A',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
                textDecorationLine: active === 'package' ? 'underline' : 'none',
              }}
              onPress={() => setActive('package')}>
              Packages
            </Text>

            <Text
              style={{
                color:
                  active === 'gallery' ? Theme.colors.primaryColor : '#9A9A9A',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
                textDecorationLine: active === 'gallery' ? 'underline' : 'none',
              }}
              onPress={() => setActive('gallery')}>
              Gallery
            </Text>

            <Text
              style={{
                color:
                  active === 'reviews' ? Theme.colors.primaryColor : '#9A9A9A',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
                textDecorationLine: active === 'reviews' ? 'underline' : 'none',
              }}
              onPress={() => setActive('reviews')}>
              Reviews
            </Text>

            <Text
              style={{
                color:
                  active === 'timing' ? Theme.colors.primaryColor : '#9A9A9A',
                fontSize: 16,
                fontFamily: Theme.fontFamily.semibold,
                marginTop: 5,
                textDecorationLine: active === 'timing' ? 'underline' : 'none',
              }}
              onPress={() => setActive('timing')}>
              Timing
            </Text>
          </View>
          {active === 'package' ? (
            <>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 15,
                  marginTop: 10,
                  height: 80,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  backgroundColor: 'rgba(0,0,0,0)',
                }}>
                <Image
                  source={require('../../../assets/images/bookImg.png')}
                  style={{height: 60, width: 60}}
                />
                <View style={{marginLeft: '2%', width: '45%'}}>
                  <Text
                    style={{
                      color: '#FFFF',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.exbold,
                    }}>
                    Haircut & Shave
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
                  <Text
                    style={{
                      color: Theme.colors.primaryColor,
                      fontSize: 12,
                      fontFamily: Theme.fontFamily.semibold,
                      marginRight: 5,
                    }}>
                    Select
                  </Text>
                  <Icon
                    name="plus"
                    type="antdesign"
                    color={Theme.colors.primaryColor}
                    size={16}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 15,
                  marginTop: 10,
                  height: 80,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  backgroundColor: 'rgba(0,0,0,0)',
                }}>
                <Image
                  source={require('../../../assets/images/bookImg.png')}
                  style={{height: 60, width: 60}}
                />
                <View style={{marginLeft: '2%', width: '45%'}}>
                  <Text
                    style={{
                      color: '#FFFF',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.exbold,
                    }}>
                    Haircut & Shave
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
                  <Text
                    style={{
                      color: Theme.colors.primaryColor,
                      fontSize: 12,
                      fontFamily: Theme.fontFamily.semibold,
                      marginRight: 5,
                    }}>
                    Select
                  </Text>
                  <Icon
                    name="plus"
                    type="antdesign"
                    color={Theme.colors.primaryColor}
                    size={16}
                  />
                </View>
              </View>
            </>
          ) : null}
          {active === 'gallery' ? (
            <>
              <View
                style={{
                  height: 130,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../../assets/images/p1.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../../assets/images/p2.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
              </View>
              <View
                style={{
                  height: 130,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../../assets/images/p3.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../../assets/images/p4.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
              </View>
              <View
                style={{
                  height: 130,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../../assets/images/p1.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../../assets/images/p2.png')}
                  style={{height: 130, width: '48%', resizeMode: 'contain'}}
                />
              </View>
            </>
          ) : null}
          {active === 'timing' ? (
            <>
              <Text
                style={{
                  color: '#FFFF',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.exbold,
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Opening Hours
              </Text>
              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                  marginHorizontal: '5%',
                }}>
                Monday - Firday:
              </Text>
              <Text
                style={{
                  color: '#B9B9B9',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.regular,
                  marginTop: 5,
                  marginHorizontal: '5%',
                }}>
                Saturday - Sunday:
              </Text>
              <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
                <Button title={'Book a session'} onPress={()=> navigation.navigate('checkout')} />
              </View>
            </>
          ) : null}
          {active === 'reviews' ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                 alignItems:"flex-end",
                  marginTop: 10,marginLeft:"10%",
                }}>
                <Text
                  style={{
                    fontSize: 50,
                    fontFamily: Theme.fontFamily.bold,
                    color: 'white',
                  }}>
                  4.7
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',top:-10,
                  }}>
                  (2.9k reviews)
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:"10%",top:-5}}>
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 25, width: 25, tintColor: '#FC8838',marginRight:5}}
                />
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 25, width: 25, tintColor: '#FC8838',marginRight:5}}
                />
               <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 25, width: 25, tintColor: '#FC8838',marginRight:5}}
                />
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 25, width: 25, tintColor: '#E4E4E4',marginRight:5}}
                />
                <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 25, width: 25, tintColor: '#E4E4E4',marginRight:5}}
                />
                {/* E4E4E4 */}
              </View>
              <View style={{height:80,width:"90%",alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15}}>
                <Image source={require('../../../assets/images/dummy.png')} style={{height:60,width:60,}}/>
                <View style={{height:80,width:"75%"}}>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                 justifyContent:"space-between",marginTop:10,
                  
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Theme.fontFamily.bold,
                    color: 'white',
                  }}>
                 Helen Tenney
                </Text>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                  
                }}>
                   <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 18, width: 18, tintColor: '#FC8838',marginRight:5}}
                />
                  <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',
                  }}>
               5.0
                </Text>
                  </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#AFAFAF',
                  }}>
                2 days ago
                </Text>
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',marginTop:5,
                  }}>
                The actual salon is very nice and the workers are professional.
                </Text>
                </View>
              </View>
              <View style={{height:80,width:"90%",alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15}}>
                <Image source={require('../../../assets/images/dummy.png')} style={{height:60,width:60,}}/>
                <View style={{height:80,width:"75%"}}>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                 justifyContent:"space-between",marginTop:10,
                  
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Theme.fontFamily.bold,
                    color: 'white',
                  }}>
                 Helen Tenney
                </Text>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                  
                }}>
                   <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 18, width: 18, tintColor: '#FC8838',marginRight:5}}
                />
                  <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',
                  }}>
               5.0
                </Text>
                  </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#AFAFAF',
                  }}>
                2 days ago
                </Text>
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',marginTop:5,
                  }}>
                The actual salon is very nice and the workers are professional.
                </Text>
                </View>
              </View>
              <View style={{height:80,width:"90%",alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15}}>
                <Image source={require('../../../assets/images/dummy.png')} style={{height:60,width:60,}}/>
                <View style={{height:80,width:"75%"}}>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                 justifyContent:"space-between",marginTop:10,
                  
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Theme.fontFamily.bold,
                    color: 'white',
                  }}>
                 Helen Tenney
                </Text>
                <View
                style={{
                  flexDirection: 'row',
                 alignItems:"center",
                  
                }}>
                   <Image
                  source={require('../../../assets/icons/star.png')}
                  style={{height: 18, width: 18, tintColor: '#FC8838',marginRight:5}}
                />
                  <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',
                  }}>
               5.0
                </Text>
                  </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#AFAFAF',
                  }}>
                2 days ago
                </Text>
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontFamily: Theme.fontFamily.regular,
                    color: 'white',marginTop:5,
                  }}>
                The actual salon is very nice and the workers are professional.
                </Text>
                </View>
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
