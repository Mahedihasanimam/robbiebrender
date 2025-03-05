import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

import tw from '../lib/tailwind';
import {
  MembersIcon,
  MessageIcon,
  RedNotification,
  seetingIcon,
  UserIcon,
} from '../assets/Icons';

const Sidebar: React.FC = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false); // State to toggle notification sidebar
  const navigation = useNavigation<any>();

  const notifications = [
    {
      id: '1',
      title: 'New quote from John Appleseed',
      category: 'Bathrooms & Plumbing',
      time: 'Today 1:56PM',
    },
    {
      id: '2',
      title: 'Robert Manager invited you to a new chat',
      category: 'Rainbow Tiles',
      time: 'Today 12:45PM',
    },
    {
      id: '3',
      title: 'Leslie Howard assigned a new checklist to you',
      category: 'Bathrooms & Plumbing',
      time: 'Yesterday 12:45PM',
    },
    {
      id: '4',
      title: 'Anna Romero replied to your quote request',
      category: 'Rainbow Tiles',
      time: '12 Nov 12:45PM',
    },
  ];

  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1, padding: 20}}>
      {/* User Info */}
      <View style={tw`flex flex-row items-center gap-[10px] px-4`}>
        <View style={tw`bg-[#D9D9D9] p-2 w-[35px] h-[35px] rounded-sm`}>
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

      {/* Sidebar Menu */}
      <View style={tw`mt-8 pl-4 border-b-2 border-[#EEF3F6]`}>
        {['Settings', 'Notifications', 'Invite members'].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item === 'Notifications') {
              navigation?.navigate('Notifications');
              }
              else if (item === 'Invite members') {
                navigation?.navigate('Invite members');
              }
              else if (item === 'Settings') {
                navigation?.navigate('Settings');
              }
              else {
                navigation.navigate(item); // Navigate to other items
              }
            }}>
            <View style={tw`flex flex-row gap-2 items-center mb-4`}>
              {/* Icon */}
              <View>
                {item === 'Settings' && <SvgXml xml={seetingIcon} />}
                {item === 'Notifications' && <SvgXml xml={RedNotification} />}
                {item === 'Invite members' && <SvgXml xml={MembersIcon} />}
              </View>
              {/* Text */}
              <Text style={tw`text-[#374957] text-[16px] font-medium`}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SplashScreen')}
        style={{marginTop: 20}}>
        <View style={tw`flex flex-row items-center pl-4`}>
          <Text style={tw`text-[#374957] text-[16px] font-medium`}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>

   
    </DrawerContentScrollView>
  );
};

export default Sidebar;
