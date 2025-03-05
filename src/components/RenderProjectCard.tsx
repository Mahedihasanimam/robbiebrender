import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CalenderIcon, downArrowIcon, ImageStack, Upicon} from '../assets/Icons';
import tw from '../lib/tailwind';
import { useNavigation } from '@react-navigation/native';

// Project item type definition
interface ProjectItem {
  id: string;
  title: string;
  badge: number;
  price: string;
  owner: string;
  date: string;
  members: string[];
}

// Props type definition
interface RenderProjectCardProps {
  item: ProjectItem;
}

const RenderProjectCard: React.FC<RenderProjectCardProps> = ({item}) => {
  const [expanded, setExpanded] = useState<{[key: string]: boolean}>({});

  const Navigation = useNavigation<any>();
  const toggleExpand = (id: string) => {
    setExpanded(prev => ({...prev, [id]: !prev[id]}));
  };

  const isExpanded = expanded[item.id] || false;

  return (
    <TouchableOpacity
      onPress={() => toggleExpand(item.id)}
      style={tw` mb-4 rounded-lg `}>
      {/* Card Header */}
      <View
        style={tw`flex-row justify-between items-start bg-white p-4 rounded-sm`}>
        <View style={tw`flex-1`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-lg font-bold text-black`}>{item.title}</Text>
            <View style={tw`flex-row items-center`}>
              {item.badge > 0 && (
                <View
                  style={tw`bg-primary h-6 w-10 mr-4 rounded-full items-center justify-center`}>
                  <Text style={tw`text-white text-xs font-medium`}>
                    {item.badge}
                  </Text>
                </View>
              )}
              {isExpanded ? (
                <SvgXml xml={Upicon} />
              ) : (
                <SvgXml xml={downArrowIcon} />
              )}
            </View>
          </View>

          <View style={tw`flex flex-row gap-2 mt-2`}>
            <Text style={tw`text-sm font-bold text-[#374957]`}>
              {item.price}
            </Text>
            <Text style={tw`text-sm text-gray`}>{item.owner}</Text>
          </View>

          {/* Date */}
          <View style={tw`flex-row items-center mt-2`}>
            <SvgXml xml={CalenderIcon} />
            <Text style={tw`text-green ml-1 text-sm font-semibold`}>
              {item.date}
            </Text>
          </View>

          <View style={tw`flex flex-row gap-2 py-4`}>
            <View>
              <SvgXml xml={ImageStack} />
            </View>
            <Text style={tw`text-[#84909A] text-sm font-normal`}>
              John Miur, Bob Appleseed, 8 more
            </Text>
          </View>
        </View>
      </View>

      <View style={tw``}>
        {isExpanded && (
          <View>
            <TouchableOpacity onPress={() =>Navigation.navigate('ChatingScreen')}  style={tw`bg-white rounded-sm   my-2  border-gray p-4 `}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-lg font-bold text-black`}>
                  Architects & Planners
                </Text>
                <View style={tw`flex-row items-center`}>
                  <View
                    style={tw`bg-primary h-6 w-10 mr-4 rounded-full items-center justify-center`}>
                    <Text style={tw`text-white text-xs font-medium`}>2</Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex-row items-center  `}>
                <SvgXml xml={ImageStack} />
                <Text style={tw`text-gray- ml-2`}>
                  John Miur, Bob Appleseed, Anna Lee
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() =>Navigation.navigate('ChatingScreen')} style={tw`bg-white rounded-sm   mb-2  border-gray p-4 `}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-lg font-bold text-black`}>
                  Architects & Planners
                </Text>
                <View style={tw`flex-row items-center`}>
                  <View
                    style={tw`bg-primary h-6 w-10 mr-4 rounded-full items-center justify-center`}>
                    <Text style={tw`text-white text-xs font-medium`}>2</Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex-row items-center  `}>
                <SvgXml xml={ImageStack} />
                <Text style={tw`text-gray- ml-2`}>
                  John Miur, Bob Appleseed, Anna Lee
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Expanded Content */}
    </TouchableOpacity>
  );
};

export default RenderProjectCard;
