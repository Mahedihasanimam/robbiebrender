import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import logo from '../assets/images/Logo.png';

import tw from '../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {MembersIcon, RedNotification, seetingIcon, UserIcon} from '../assets/Icons';

const Sidebar: React.FC = () => {
  const navigation = useNavigation<any>();


  

  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1, padding: 20}}>
      <View style={tw`flex flex-row items-center gap-[10px] px-4`}>
        <View style={tw`bg-[#D9D9D9] p-2 w-[35px] h-[35px] rounded-sm `}>
          <SvgXml xml={UserIcon} />
        </View>

        <Text style={tw`text-[#222325] text-[16px] font-bold`}>
          Leslie Alexander
        </Text>
      </View>

      <View style={tw`px-4 py-4 gap-2 border-b-2 border-[#EEF3F6]`}>
        <Text style={tw`text-[#84909A] font-semibold text-[15px]`}>
          Ray White
        </Text>
        <Text style={tw`text-sm font-normal text-[#84909A]`}>
          leslie.alexander@domainname.com.au
        </Text>
      </View>

      {/* Navigation Links */}

      <View style={[tw`mt-8 pl-4 border-b-2 border-[#EEF3F6] `]}>
        {['Settings', 'Notifications', 'Invite members'].map((item, index) => (
          <Text
            style={tw`text-[#41414D] text-[16px] font-bold  mb-4 rounded-lg`}
            key={index}
            onPress={() => navigation.navigate(item)} // Modify to correct screen
          >
            <View style={tw`flex flex-row gap-2 items-center`}>

              <View>
            {
              item === 'Settings' && (
                <SvgXml xml={seetingIcon} />
              )
            }
            {
              item === 'Notifications' && (
                <SvgXml xml={RedNotification} />
              )
            }
            {
              item === 'Invite members' && (
                <SvgXml xml={MembersIcon} />
              )
            }

              </View>
            <Text style={tw`text-[#374957] text-[16px] font-medium`}>{item}</Text>
            </View>
          </Text>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')} style={{marginTop: 20}}>
        <View style={tw`flex flex-row items-center pl-4`}>
          <Text style={tw`text-[#374957] text-[16px] font-medium`}>Log out</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
