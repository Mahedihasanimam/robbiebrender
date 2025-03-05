import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import tw from 'twrnc'; // Import twrnc
import {HEIGHT, WIDTH} from '../utils/utils';
import {SvgXml} from 'react-native-svg';
import {MessageIcon, seetingIcon} from '../assets/Icons';

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

const Notification = () => {
  const [visible, setVisible] = useState(false); // Initially hidden

  const navigation = useNavigation();

  return (
    <View style={tw`w-full bg-black bg-opacity-5 h-full`}>
      <View
        style={[
          tw`flex-1 flex-col justify-between   bg-[#F7F9FB]`,
          {width: WIDTH * 0.9},
        ]}>
        <View style={tw` bg-[#F7F9FB] py-4   `}>
          {/* Header */}
          <View
            style={tw`flex-row justify-between items-center mb-2 bg-white p-4 `}>
            <Text style={tw`text-lg font-bold`}>🔔 Notification </Text>
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Text style={tw`text-2xl text-gray-500`}>✖</Text>
            </TouchableOpacity>
          </View>

          <View style={tw``}>
            {/* Notification List */}
            <FlatList
              data={notifications}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={tw`bg-[#F7F9FB] p-2 `}>
                  <View style={tw`p-4 bg-white rounded-lg mb-2 shadow-md `}>
                    <Text style={tw`font-bold`}>{item.title}</Text>
                    <Text style={tw`text-xs text-gray mt-1`}>
                      {item.category} • {item.time}
                    </Text>
                  </View>

                  <View style={tw`flex flex-row gap-2 items-center py-2 border-b pb-4 border-[#EEF2FB]`}>
                    <View style={tw`flex flex-row gap-2 items-center px-2`}>
                      <SvgXml xml={MessageIcon} />
                      <Text style={tw`text-sm text-[#84909A] `}>
                        Rainbow Tiles
                      </Text>
                    </View>
                    <View style={tw`flex flex-row gap-2 items-center px-2`}>
                      <Text style={tw`text-sm text-[#717B7D] font-semibold`}>
                      12 Nov
                      </Text>
                      <Text style={tw`text-sm text-[#717B7D]`}>
                      12:45PM
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        {/* Mark all as read */}
        <TouchableOpacity
          style={tw`p-2 bg-white  rounded-md p-4 my-4 flex-row justify-between items-center`}
          onPress={() => alert('All notifications marked as read!')}>
          <Text style={tw`text-[#FF8858] font-bold`}>Mark all as read</Text>
          <SvgXml xml={seetingIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;
