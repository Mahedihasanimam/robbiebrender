import React from 'react';
import {View, Text} from 'react-native';
import tw from '../lib/tailwind';

const MenuItem = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg font-bold text-gray-800`}>This is the MenuItem Page</Text>
    </View>
  );
};

export default MenuItem;
