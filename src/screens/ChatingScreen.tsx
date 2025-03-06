import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import tw from 'twrnc';
import {SvgXml} from 'react-native-svg';
import {downArrowIcon, EditIcon, SendIcon, UserIcon, UserPlus} from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';
import Files from './chatingTabs/Files';
import Quotes from './chatingTabs/Quotes';
import Invoices from './chatingTabs/Invoices';
import Some from './chatingTabs/Some';
import TabsscreenHeader from '../components/TabsscreenHeader';

interface Message {
  id: string;
  text: string;
  sender: string;
}

const users = ['John, Marta, Leslie', 'Marta', 'Leslie'];
const tabs = ['Chat', 'Files', 'Quotes', 'Invoices', 'Some '];

const ChatingScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('John');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Chat');
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({animated: true});
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim().length === 0) return;
    setMessages([
      ...messages,
      {id: Date.now().toString(), text: newMessage, sender: selectedUser},
    ]);
    setNewMessage('');
  };

  useEffect(() => {
    // Default messages when the component loads
    setMessages([
      {id: '1', text: 'Hello! How can I help you?', sender: 'John'},
      {id: '2', text: 'I need some assistance from you.', sender: 'Marta'},
      {id: '3', text: 'Sure! What seems to be the issue?', sender: 'John'},
    ]);
  }, []);

  const renderItem = ({item}: {item: Message}) => (
    <View
      style={tw`p-3 my-1 rounded-lg max-w-[75%] ${
        item.sender === selectedUser
          ? 'bg-[#D9E0E4] text-black self-end'
          : 'bg-[#D9E0E4] self-start'
      }`}>
      <Text style={tw`text-black`}>{item.text}</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-[#F9FBFB]`}>
      {/* Header */}
      <TabsscreenHeader title={'Bathrooms & Plumbing'} showMenu={false} />

      {/* Tabs */}
      <View style={tw`flex-row border-b border-gray-300`}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={tw`flex-1 items-center p-3 ${
              activeTab === tab ? 'bg-[#FF8858]  text-white' : ''
            }`}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={tw`${
                activeTab === tab ? 'text-white font-bold' : 'text-[#202F3A]'
              }`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {activeTab === 'Chat' && (
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={tw`flex-1 px-4 mt-6`}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({animated: true})
          }
          onLayout={() => flatListRef.current?.scrollToEnd({animated: true})}
        />
      )}

      {/* FILES TABS ------------------- */}
      {activeTab === 'Files' && (
        <Files/>
      )}

      {/* QUOTES TABS ------------------- */}
      {activeTab === 'Quotes' && (
        <Quotes/>
      )}

      {/* INVOICES TABS ------------------- */}
      {activeTab === 'Invoices' && (
        <Invoices/>
      )}

      {/* SOME TABS ------------------- */}
      {activeTab === 'Some' && (
       <Some/>
      )}

      {/* Bottom Input */}
      {activeTab === 'Chat' && (
        <View style={tw`  mx-4`}>
          <TouchableOpacity
            style={tw`flex-row justify-between  bg-white rounded-md p-4 mb-4`}
            onPress={() => setModalVisible(true)}>
            <View style={tw`flex flex-row gap-2`}>
              <SvgXml xml={UserIcon} />
              <Text style={tw`text-[#202F3A]`}>{selectedUser}</Text>
            </View>
            <SvgXml xml={downArrowIcon} />
          </TouchableOpacity>

          <View style={tw`w-full bg-white p-2`}>
            <View
              style={tw`flex-row items-center bg-[#F2F5F6] px-2 rounded-md mt-3 w-4/5 self-end `}>
              <TextInput
                style={tw`flex-1 text-gray-700`}
                placeholder="Aa"
                value={newMessage}
                onChangeText={setNewMessage}
              />
              <TouchableOpacity onPress={sendMessage}>
                <SvgXml xml={SendIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* User Selection Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={tw`flex-1 justify-end items-start `}>
          <View style={tw`bg-white border border-[#F9FBFB] shadow-lg p-5 rounded-t-3xl w-full`}>
            <View style={tw`flex flex-row items-center  justify-between`}>
              <Text style={tw` text-[#A8B4B7] font-semibold text-sm`}>Message to</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={tw`text-2xl text-[#202F3A]`}>✖</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={tw` flex flex-row py-4 `}>
                <SvgXml xml={UserIcon} />
                <Text style={tw`text-[#202F3A] ml-2`}>
                  John, Marta, Leslie, Robert + 3 more
                </Text>
              </View>
              <View style={tw` flex flex-row  pb-4 `}>
                <SvgXml xml={UserIcon} />
                <Text style={tw`text-[#202F3A] ml-2`}>
                John, Marta
                </Text>
              </View>
              <View style={tw` flex flex-row  pb-4 border-b-2 border-[#EEF3F6] `}>
                <SvgXml xml={UserIcon} />
                <Text style={tw`text-[#202F3A] ml-2`}>
                John
                </Text>
              </View>



              <TouchableOpacity style={tw` flex flex-row  pt-8 pb-4  border-b-2 border-[#EEF3F6]`}>
                <SvgXml xml={UserPlus} />
                <Text style={tw`text-[#FF8858] text-[16px] font-medium ml-2`}>
               Create new chat
                </Text>
              </TouchableOpacity>


              <TouchableOpacity>
                <Text style={tw`text-[#FF3743] text-[16px] font-medium pt-8 pb-4 `}>Archive chat</Text>
              </TouchableOpacity>


              
            </View>
          </View>
        </View>
      </Modal>

      {/* Floating Edit Button */}
      <TouchableOpacity style={tw`absolute bottom-0 left-0`}>
        <SvgXml xml={EditIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatingScreen;
