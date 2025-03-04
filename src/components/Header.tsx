import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const MainScreenHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff' }}>
      {/* Sidebar Toggle Button */}
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ fontSize: 24 }}>☰</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Ray White</Text>

      {/* User Info */}
      <View style={{ marginLeft: 'auto', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>Hi, Imad 👋</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Replace with actual profile image URL
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>
    </View>
  );
};

export default MainScreenHeader;
