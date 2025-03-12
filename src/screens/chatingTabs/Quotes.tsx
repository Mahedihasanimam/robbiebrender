import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Modal, TextInput} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import tw from 'twrnc';
import {SvgXml} from 'react-native-svg';
import {
  Combine,
  downArrowIcon,
  EditIcon,
  saveicon,
  Variation,
} from '../../assets/Icons';
import { Picker } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';

const quotes = [
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
    status: 'Approved',
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

const renderRightActions = () => (
  <View style={tw`flex-row items-center bg-gray-400 p-2 rounded-r-lg h-34`}>
    <TouchableOpacity style={tw`mx-1`}>
      <SvgXml xml={saveicon} />
      <Text style={tw`text-white font-semibold mx-1`}>Save</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={tw`mx-1 flex flex-col items-center justify-center ml-4`}>
      <View
        style={tw`bg-white w-[20px] px-6 py-3 flex flex-row items-center justify-center rounded-full`}>
        <SvgXml xml={Combine} />
      </View>
      <Text style={tw`text-white font-semibold mx-1`}>Variation</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={tw`mx-1 flex flex-col items-center justify-center`}>
      <View
        style={tw`bg-white w-[20px] px-6 py-3 flex flex-row items-center justify-center rounded-full`}>
        <SvgXml xml={Variation} />
      </View>
      <Text style={tw`text-white font-semibold mx-1`}>Variation</Text>
    </TouchableOpacity>
  </View>
);

const Quotes = () => {

  const [createModal, setcreatemodalvisiblle] = React.useState <boolean> (false);
  const [selectedValue, setSelectedValue] = React.useState<string> ('Bathrooms & Plumbing');
  const Navigation = useNavigation<any>();


  const handleprocedline = ()=>{
    setcreatemodalvisiblle(false)
    Navigation.navigate('CreateNewQuots')
  }
  return (
    <GestureHandlerRootView style={tw`flex-1 bg-gray-100 p-4`}>
      <View
        style={tw`flex flex-row items-center justify-between bg-white p-2 mb-4 rounded-lg`}>
        <Text style={tw`text-[16px] text-[#374957] font-bold mb-4`}>
          Supplier Quotes{' '}
        </Text>
        <SvgXml xml={downArrowIcon} />
      </View>
      <FlatList
        data={quotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Swipeable  renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={()=>Navigation.navigate('Quots Details')} style={tw`bg-white p-4 rounded-lg mb-3 shadow-md`}>
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`text-lg font-bold`}>{item.title}</Text>
                <TouchableOpacity
                  style={tw` ${
                    item?.status === 'Pending'
                      ? 'bg-gray-200'
                      : item.status === 'Approved'
                      ? 'bg-[#F0FFED]'
                      : 'bg-[#FFF0F0]'
                  } py-2 px-4 rounded-sm `}>
                  <Text
                    style={tw` font-bold ${
                      item?.status === 'Pending'
                        ? 'text-[#84909A]'
                        : item.status === 'Approved'
                        ? 'text-[#0FAB31]'
                        : 'text-[#FF3743]'
                    }`}>
                    {item.status}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={tw`text-xl font-bold my-2`}>{item.price}</Text>
              <View style={tw`flex flex-row justify-between items-center`}>
                <Text style={tw`text-sm font-normal text-[#84909A]`}>
                  {item.company}
                </Text>
                <Text style={tw`text-sm font-semibold text-[#FF3743] mt-2`}>
                  {item.dueDate}
                </Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
      />
      <TouchableOpacity onPress={() => setcreatemodalvisiblle(true)} style={tw`absolute bottom-0 left-0`}>
        <SvgXml xml={EditIcon} />
      </TouchableOpacity>

      <Modal
        visible={createModal}
        transparent
        animationType="slide"
        onRequestClose={() => setcreatemodalvisiblle(false)}>
        <View style={tw`flex-1 justify-end items-start bg-[#858585] `}>
          <View
            style={tw`bg-white border border-[#F9FBFB] shadow-lg p-5 rounded-t-3xl w-full`}>
            <View style={tw`flex flex-row items-center  justify-between`}>
              <Text style={tw` text-[#A8B4B7] font-semibold text-sm`}>
              New quote
              </Text>
              <TouchableOpacity onPress={() => setcreatemodalvisiblle(false)}>
                <Text style={tw`text-2xl text-[#202F3A]`}>✖</Text>
              </TouchableOpacity>
            </View>

        

            <View style={tw`mt-6`}>
              <View>
                <Text style={tw`text-[#374957] text-sm font-normal`}>
                Send quote to
                </Text>
                <TextInput
                  placeholder="Type name or email here"
                  style={tw`border-b border-[#C6D0D2]`}
                />
              </View>
              <View style={tw`mt-6`}>
                <Text style={tw`text -[#374957] text-sm font-normal`}>
                Reference
                </Text>
                <TextInput
                  placeholder="Address or any reference describing the job"
                  style={tw`border-b border-[#C6D0D2]`}
                />
              </View>

              <View style={tw`mt-8`}>
                <Picker
                  label="Add to task"
                  value={selectedValue}
                  onChange={itemValue => setSelectedValue(itemValue)}
                  style={tw`border-b border-[#C6D0D2] pb-2 pl-2 `}>
                  <Picker.Item label="Bathrooms & Plumbing" value="Bathrooms & Plumbing" />
                  <Picker.Item label="Bathrooms & plumber" value="Bathrooms & plumber" />
                  <Picker.Item label="Bathrooms & construction" value="Bathrooms & construction" />
                </Picker>
              </View>

              <View>
                <TouchableOpacity
                  onPress={handleprocedline}
                  style={tw`bg-[#FF8858] p-4 rounded-sm mt-8 flex flex-row items-center justify-center`}>
                  <Text style={tw`text-white font-semibold text-[16px]`}>
                  Proceed to line items
                  </Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>
        </View>
      </Modal>

    </GestureHandlerRootView>
  );
};

export default Quotes;
