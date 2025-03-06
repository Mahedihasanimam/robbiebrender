import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from 'twrnc';
import { backIcon, Threedote } from '../assets/Icons';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
}

const TabsscreenHeader: React.FC<HeaderProps> = ({
    title,
    onMenuPress,
    showBack = true,
    showMenu = true,
}
) => {
    const navigateion = useNavigation();


  return (
    <View style={tw` flex flex-row items-center justify-between px-2 py-3 bg-gray-50 border-b border-gray-200`}>
      {/* Back Button */}
      
      <View style={tw`flex flex-row gap-1 items-center`}>

      <TouchableOpacity 
        style={tw`w-10 h-10 justify-center ${showBack ? '' : 'invisible'}`}
        onPress={() => navigateion.goBack()}
      >
       <SvgXml xml={backIcon}/>
      </TouchableOpacity>

     
      <Text style={tw` text-base font-medium text-gray-700 text-center mx-2`}>
        {title}
      </Text>
      </View>

      {/* Menu Button */}
      <TouchableOpacity 
        style={tw`w-10 h-10 justify-center items-center ${showMenu ? '' : 'invisible'}`}
        onPress={onMenuPress}
      >
        <SvgXml xml={Threedote}/>
      </TouchableOpacity>
    </View>
  );
};

export default TabsscreenHeader;