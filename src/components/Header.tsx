import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { menuicon, Notification } from '../assets/Icons';

const MainScreenHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#F2F6F8',
      }}>
      {/* Sidebar Toggle Button */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        
        <SvgXml xml={menuicon}/>
      </TouchableOpacity>

      {/* Logo */}

      <View>
        <Image source={require('../assets/images/Logo.png')} />
      </View>

      
      <TouchableOpacity
        onPress={() => navigation.navigate('notification')}>
          
          <SvgXml xml={Notification}/>
        </TouchableOpacity>
 
    </View>
  );
};

export default MainScreenHeader;
