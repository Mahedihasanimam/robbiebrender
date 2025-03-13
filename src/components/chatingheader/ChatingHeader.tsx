import { View, Text, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native-ui-lib';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { downArrowIcon, seetingIcongray } from '../../assets/Icons';

// Corrected TypeScript Interfaces
interface SelectedItemProps {
    selectedSection: string;
    setSelectedSection: (value: string) => void;
}

interface DropdownProps {
    selectedValue: string;
    onValueChange: (value: string) => void;
    options: string[];
}

const CustomDropdown: React.FC<DropdownProps> = ({ selectedValue, onValueChange, options }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={tw`w-full`}>
            <TouchableOpacity 
                onPress={() => setModalVisible(true)} 
                style={tw`flex flex-row items-center justify-between  p-2 mr-2 `}
            >
                <Text style={tw`mr-2`}>{selectedValue}</Text>
                <View style={tw`mr-4`}>
                    <SvgXml xml={downArrowIcon} />
                </View>
            </TouchableOpacity>

            {/* Modal for Dropdown Options */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                        <View style={tw`bg-white p-5 rounded-lg w-4/5`}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => { 
                                        onValueChange(item); 
                                        setModalVisible(false); 
                                    }}>
                                        <Text style={tw`p-3 border-b`}>{item}</Text>
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

const ChatingHeader: React.FC<SelectedItemProps> = ({ setSelectedSection, selectedSection }) => {
    return (
        <View style={tw`flex-row items-center justify-between w-full p-2 bg-white rounded-lg mt-2`}>
            {/* Left Side - Logo */}
            <SvgXml xml={seetingIcongray} />

            {/* Right Side - Dropdown */}
            <CustomDropdown
                selectedValue={selectedSection}
                onValueChange={setSelectedSection}
                options={["Main settings", "Notifications", "You & Your business"]}
            />
        </View>
    );
};

export default ChatingHeader;
