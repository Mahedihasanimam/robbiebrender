import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/images/Logo.png'
import tw from '../lib/tailwind';

const  InitialScreen = () => {

  const navigation = useNavigation();

  return (
    <View
    style={tw`px-4 mt-[50%] flex   `}
    // Apply FadeIn animation
    >
   
        {/* App Logo */}
          <Image source={logo} style={tw`h-[100px] w-[200px] mx-auto`}  resizeMode="contain" />

        {/* Welcome Text */}
        <Text style={[styles.welcomeText]}>
          Welcome to Track'd. The worlds leading asset management and ticket
          logging platform.
        </Text>

        <View style={tw`justify-center items-center`}>
             {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, ]}
          onPress={() => {navigation.navigate("SignupAsUser")}}>
          <Text style={[styles.buttonText,]}>SIGN UP AS A USER</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, ]}
          onPress={() => {navigation.navigate('LoginScreen')}}>
          <Text style={[styles.buttonText,]}>
            LOGIN AS A TECHNICIAN
          </Text>

        </TouchableOpacity>
           </View>

     

    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  
  animatedContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  
 
  welcomeText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: '10%',
    paddingTop: '5%',

    lineHeight:21
  },
  button: {
    width: '90%',
    paddingVertical: '3%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: '4%',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
});
