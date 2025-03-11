import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {EditIcon} from '../../assets/Icons';
import tw from '../../lib/tailwind';

const Some = () => {
  return (
    <View>
      <Text>Some</Text>

      <TouchableOpacity style={tw`absolute bottom-0 left-0`}>
        <SvgXml xml={EditIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Some;
