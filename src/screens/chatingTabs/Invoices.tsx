import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import tw from 'twrnc';
import {SvgXml} from 'react-native-svg';
import {Combine, downArrowIcon, EditIcon, saveicon, Variation} from '../../assets/Icons';
import { useNavigation } from '@react-navigation/native';

const invioice = [
  {
    id: '1',
    title: 'Master bathroom taps',
    price: '$18,500.00',
    company: 'Tapsandsinks Co',
    status: 'Pending',
    dueDate: 'Due 18.11.2024',
    statusColor: 'text-gray-500',
  },
  {
    id: '2',
    title: 'Floor tiles ember',
    price: '$32,600.00',
    company: 'Rainbow Tiles Co',
    status: 'Paid',
    dueDate: '16.11.2024',
    statusColor: 'text-green-500',
  },
  {
    id: '3',
    title: 'Plumbing services',
    price: '$19,100.00',
    company: 'JohnSmith Co',
    status: 'Rejected',
    dueDate: '16.11.2024',
    statusColor: 'text-red-500',
  },
];


const Invoices = () => {
    const Navigation = useNavigation<any>();
  return (
    <GestureHandlerRootView style={tw`flex-1 bg-gray-100 p-4`}>

        
      <View style={tw`flex flex-row items-center justify-between bg-white p-2 mb-4 rounded-lg`} >
        <Text style={tw`text-[16px] text-[#374957] font-bold mb-4`}>Supplier Invoices </Text>
        <SvgXml xml={downArrowIcon}/>
      </View>
      <FlatList
        data={invioice}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
      
            <TouchableOpacity onPress={()=>Navigation.navigate('InvoiceDetails')} style={tw`bg-white p-4 rounded-lg mb-3 shadow-md`}>
              <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`text-lg font-bold`}>{item.title}</Text>
              <TouchableOpacity style={tw` ${item?.status === 'Pending' ? 'bg-gray-200' : item.status === 'Paid' ? 'bg-[#F0FFED]' : 'bg-[#FFF0F0]'} py-2 px-4 rounded-sm `}>
                <Text style={tw` font-bold ${item?.status === 'Pending' ? 'text-[#84909A]' : item.status === 'Paid' ? 'text-[#0FAB31]' : 'text-[#FF3743]'}`}>{item.status}</Text>
              </TouchableOpacity>
              </View>
              <Text style={tw`text-xl font-bold my-2`}>{item.price}</Text>

              <View style={tw`flex flex-row justify-between items-center`}>

              <Text style={tw`text-sm font-normal text-[#84909A]`}>{item.company}</Text>
            
              <Text style={tw`text-sm font-semibold text-[#FF3743] mt-2`}>{item.dueDate}</Text>
              </View>
            </TouchableOpacity>
         
        )}
      />
      <TouchableOpacity style={tw`absolute bottom-0 left-0`}>
              <SvgXml xml={EditIcon} />
            </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default Invoices;
