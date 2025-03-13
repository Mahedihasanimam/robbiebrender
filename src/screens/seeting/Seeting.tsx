import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback, TextInput } from 'react-native';
import ChatingHeader from '../../components/chatingheader/ChatingHeader';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { keyicon } from '../../assets/Icons';
import { ScrollView } from 'react-native-gesture-handler';

const CustomDropdown = ({ selectedValue, onValueChange, options }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={tw`border-b-2 border-[#C6D0D2] pb-4`}>
                <Text>{selectedValue}</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} transparent animationType="slide">
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, width: '80%' }}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => { onValueChange(item); setModalVisible(false); }}>
                                        <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('Main settings');
    const [pendingApproval, setPendingApproval] = useState(true);
    const [quoteApproved, setQuoteApproved] = useState(true);
    const [autoPay, setAutoPay] = useState(true);
    const [timezone, setTimezone] = useState('UTC+10:00: Australian Eastern Standard Time');





    return (
        <ScrollView style={tw`bg-[#E1E7EA]`}>
            <View style={tw`px-4`}>
                <ChatingHeader setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
            </View>

            <View style={tw`p-4 bg-white mt-4`}>

                <View style={tw`mb-4`}>

                    <Text style={tw`text-[#8A91A0] text-sm font-normal`}>Account Name</Text>
                    <TextInput placeholder='Leslie Alexander' style={tw`border-b-2 border-[#C6D0D2] text-lg font-bold text-[#222325]`} />
                </View>


                <View style={tw`mb-4`}>

                    <Text style={tw`text-[#8A91A0] text-sm font-normal`}>Email</Text>
                    <TextInput placeholder='leslie.alexander@example.com' style={tw`border-b-2 border-[#C6D0D2] text-lg font-bold text-[#222325]`} />
                </View>

                <TouchableOpacity style={tw`flex flex-row items-center gap-2`}>
                    <SvgXml xml={keyicon}/>
                    <Text style={tw`text-[#FF8858] font-semibold py-4`}>Change password here</Text>
                </TouchableOpacity>

                <View style={tw``}>

                <Text style={tw`text-[#222325] text-lg font-bold  pb-2 mt-4`}>Project Settings</Text>
                {[{
                    label: "Mark as ‘Pending approval’ when any quote is received",
                    state: pendingApproval,
                    setState: setPendingApproval
                }, {
                    label: "Auto mark all as 'Quote approved' when receive approval from client",
                    state: quoteApproved,
                    setState: setQuoteApproved
                }, {
                    label: "Auto Pay any job when it's marked as completed",
                    state: autoPay,
                    setState: setAutoPay
                }].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Switch
                        style={tw`mr-2`}
                            value={item.state}
                            onValueChange={item.setState}
                            trackColor={{ false: '#ccc', true: '#FF8858' }}
                            thumbColor={'#ffff'}
                        />
                        <Text style={tw`text-[16px] `} >{item.label}</Text>
                    </View>
                ))}

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Notifications</Text>
                {[{
                    label: "Mark as 'Pending approval' when any quote is received",
                    state: pendingApproval,
                    setState: setPendingApproval
                }, {
                    label: "Auto mark all as 'Quote approved' when receive approval from client",
                    state: quoteApproved,
                    setState: setQuoteApproved
                }, {
                    label: "Auto Pay any job when it's marked as completed",
                    state: autoPay,
                    setState: setAutoPay
                }].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical:10}}>
                        <Switch
                          style={tw`mr-2`}
                          value={item.state}
                          onValueChange={item.setState}
                          trackColor={{ false: '#ccc', true: '#FF8858' }}
                          thumbColor={'#ffff'}
                        />
                        <Text style={tw`text-[16px] `}>{item.label}</Text>
                    </View>
                ))}

                </View>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom:20 }} >Timezone</Text>
                <CustomDropdown
                    selectedValue={timezone}
                    onValueChange={setTimezone}
                    options={["UTC+10:00: Australian Eastern Standard Time"]}
                />
            </View>
        </ScrollView>
    );
};

export default Settings;
