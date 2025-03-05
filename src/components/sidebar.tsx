import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
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
                setNotificationVisible(true); // Show the notification sidebar when clicked
              } else {
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
        onPress={() => navigation.navigate('Home')}
        style={{marginTop: 20}}>
        <View style={tw`flex flex-row items-center pl-4`}>
          <Text style={tw`text-[#374957] text-[16px] font-medium`}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>

      {/* Notification Sidebar Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isNotificationVisible}>
        <View style={tw`flex-1 bg-black bg-opacity-50 justify-start `}>
          <View
            style={tw`w-[87%] bg-[#F7F9FB]  rounded-r-xl h-full self-start shadow-md`}>
            {/* Header */}
            <View
              style={tw`flex-row justify-between items-center mb-2 bg-white p-4`}>
              <Text style={tw`text-lg font-bold`}>🔔 Notifications</Text>
              <TouchableOpacity onPress={() => setNotificationVisible(false)}>
                <Text style={tw`text-2xl text-gray-500`}>✖</Text>
              </TouchableOpacity>
            </View>

            <View style={tw`bg-[#F7F9FB] h-full`}>
              <FlatList
                data={notifications}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity style={tw``}>
                    <View style={tw`  m-2 bg-white rounded-lg shadow-md`}>
                      <View style={tw` p-4 `}>
                        <Text style={tw`font-bold`}>{item.title}</Text>
                        <Text style={tw`text-xs text-gray-500 mt-1`}>
                          {item.category} • {item.time}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={tw`flex flex-row items-center border-b-2 border-[#EEF2FB] mx-4 mb-4 `}>
                      <View style={tw`flex flex-row items-center gap-2 py-4`}>
                        <SvgXml xml={MessageIcon} />
                        <Text style={tw`text-[12px] text-[#84909A]`}>
                          Bathrooms & Plumbing
                        </Text>
                      </View>

                      <View style={tw`flex flex-row items-center gap-2  `}>
                        <Text style={tw`text-[12px] text-[#717B7D] font-bold`}>
                          Today
                        </Text>
                        <Text style={tw`text-[12px] text-[#717B7D]`}>
                          1:56PM
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
