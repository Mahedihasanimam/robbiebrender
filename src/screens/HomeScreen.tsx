import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from '../lib/tailwind'; // Assuming you're using Tailwind
import {ScrollView} from 'react-native-gesture-handler';
import MainScreenHeader from '../components/Header';
import Svg, {SvgXml} from 'react-native-svg';
import {downArrowIcon, EditIcon, Upicon} from '../assets/Icons';
import RenderProjectCard from '../components/RenderProjectCard';

const projects = [
  {
    id: '1',
    title: '52 Lorraine ave, Bellevue Hill',
    price: '$439,050.00',
    owner: 'Esther Howard',
    date: '24 Dec 2024',
    badge: 6,
    members: ['JA', 'John Miur', 'Bob Appleseed', '8 more'],
  },
  {
    id: '2',
    title: '8 Gremlin cres, Picnic Point',
    price: '$439,050.00',
    owner: 'Esther Howard',
    date: '12 Nov 2024',
    badge: 0,
    members: ['JA', 'John Miur', 'Bob Appleseed', '8 more'],
  },
  {
    id: '3',
    title: 'Padstow Plumbing & Tiles',
    price: '$439,050.00',
    owner: 'Esther Howard',
    date: '24 Dec 2024',
    badge: 2,
    members: ['JA', 'John Miur', 'Bob Appleseed', '8 more'],
  },
  {
    id: '4',
    title: 'Padstow Plumbing & Tiles',
    price: '$439,050.00',
    owner: 'Esther Howard',
    date: '24 Dec 2024',
    badge: 2,
    members: ['JA', 'John Miur', 'Bob Appleseed', '8 more'],
  },
];

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState<'my' | 'shared'>('my');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({...prev, [id]: !prev[id]}));
  };

  // Render a single project card

  return (
    <View style={tw`flex-1 h-full bg-[#F2F6F8] relative`}>
      <MainScreenHeader />
      <ScrollView style={tw`p-4`}>
        {/* Search Bar */}
        <TextInput
          placeholder="Search"
          style={tw`bg-white p-3 rounded-lg mb-4`}
        />

        {/* Tabs */}
        <View style={tw`flex-row mb-4 gap-4`}>
          <TouchableOpacity
            onPress={() => setSelectedTab('my')}
            style={tw`flex-1 p-3 rounded-lg ${
              selectedTab === 'my' ? 'bg-primary' : 'bg-white'
            }`}>
            <Text
              style={tw`text-[14px] font-semibold ${
                selectedTab === 'my' ? 'text-white' : 'text-[#717B7D]'
              } text-center`}>
              My Projects
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab('shared')}
            style={tw`flex-1 p-3 rounded-lg ${
              selectedTab === 'shared' ? 'bg-primary' : 'bg-white'
            }`}>
            <Text
              style={tw`text-[14px] font-semibold ${
                selectedTab === 'shared' ? 'text-white' : 'text-[#717B7D]'
              } text-center`}>
              Shared with Me
            </Text>
          </TouchableOpacity>
        </View>

        {/* Project List */}
        <FlatList
          data={projects}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RenderProjectCard item={item} />}
          scrollEnabled={false} // Disable scrolling in FlatList since we're using ScrollView
        />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={tw`absolute bottom-10 `}>
        <SvgXml xml={EditIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
