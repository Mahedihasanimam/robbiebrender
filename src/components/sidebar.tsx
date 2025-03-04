import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import logo from '../assets/images/Logo.png'

import tw from '../lib/tailwind';

const Sidebar: React.FC = ( ) => {
  const navigation = useNavigation<any>();
  const { height } = Dimensions.get("window"); 
const adjustedHeight = height - 250;

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1, padding: 20 }}>
          <Image source={logo} style={tw`mt-4 ml-4`} resizeMode="contain" />

      {/* Navigation Links */}

      <View style={[tw`mt-8 pl-4`,{height: adjustedHeight}]} >
      {['About us', 'Legal resources', 'Disclaimers', 'Favorite list', 'Delete your profile'].map((item, index) => (
        <Text
        style={tw`text-[#41414D] text-[16px] font-bold  mb-4 rounded-lg`}
          key={index}
        
          onPress={() => navigation.navigate('Home')} // Modify to correct screen
        >
          {item}
        </Text>
      ))}
      </View>
      

      {/* Logout */}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <View  style={tw`flex flex-row items-center`}>
         
        <Text style={tw`text-red text-[16px] font-normal`}>
             Log out
        </Text>     
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
