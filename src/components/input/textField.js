import { placeholder } from '@babel/types'
import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,TextInput } from 'react-native'
// import { COLORS, getFont, ICONS, wp } from '../../constants'
import Theme from '../../Theme/Theme'

const TextField = (props) => {
    const{ value, label,editable=true, placeholderTextColor, labelStyle,reset, setReset,blurOnSubmit=true, multiline=false, required, maxLength=1000, onTermChange, placeholder, style, keyboardType='default', secureText=false}= props 
    // console.log(secureText)
    const [input, setinput] = useState('')
    
    useEffect(() => {
       if(value && !input){
           setinput(value)
       }
    //    if(value && !editable){
    //     setinput(value)
    // }
       if(reset){
        //    console.log('cleearrrrrrrrrrrrrr')
           setinput('')
           setReset(false)
       }
    }, [value, reset])

    
    const handleTextChange= val => {
        setinput(val)
        onTermChange(val)
    }
    return (
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {label &&<Text style={[styles.label, labelStyle]}>{label}</Text>}
           {required && <ICONS.FontAwesome5 name={'star-of-life'} color={Theme.colors.redColor}/>}
            </View>
        
           <TextInput 
           placeholderTextColor={placeholderTextColor|| Theme.colors.grayMedium}
           keyboardType={keyboardType}
          
           secureTextEntry={secureText}
           blurOnSubmit={blurOnSubmit}
        //    secureTextEntry={secureText}
           style={[styles.input, style, 
           //!editable && {backgroundColor:COLORS.bgLight}
           ]} 
           onChangeText={(val)=>handleTextChange(val)} 
           value={input} 
           maxLength={maxLength}
           multiline={multiline}
           editable={editable}

        //    onBlur={()=>Keyboard.dismiss()}
           placeholder={placeholder}/>
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:Theme.colors.grey,
     
        color:Theme.colors.blackColor,
        // lineHeight:33,
        // height:40,
        width:'90%',
        // ...getFont('Poppins_m_14'),
        fontSize:14,
        paddingVertical:2,
        marginBottom:5,
        marginTop:2,
        // lineHeight:12,
        // paddingHorizontal:'4%',
        // marginBottom:'4%',
    },
    label:{
        // paddingHorizontal:'2%',
        // fontFamily:Theme.fontFamily.medium,
        paddingTop:'2%',
        color:Theme.colors.blackColor,
       
    }
})
