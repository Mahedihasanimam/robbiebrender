import React, { useState } from 'react';
import {
  View, Text, FlatList, TextInput, TouchableOpacity,
  Alert, Modal, Image, PermissionsAndroid, Platform
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import RNFS from 'react-native-fs';
import tw from '../../lib/tailwind';
import { EditIcon, FileIcon, imageupload } from '../../assets/Icons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

interface FileItem {
  id: string;
  name: string;
  size: string;
  date: string;
  url: string;
}

// Sample file data with URLs
const fileData: FileItem[] = [
  { id: '1', name: 'Inspection nothing.zip', size: '645 Kb', date: '15.11.2024', url: 'https://example.com/file1.zip' },
  { id: '2', name: 'Business Expenses.xlsx', size: '645 Kb', date: '15.11.2024', url: 'https://example.com/file2.xlsx' },
  { id: '3', name: 'Inspection photo.png', size: '645 Kb', date: '15.11.2024', url: 'https://example.com/file3.png' },
  { id: '4', name: 'ContractCopy.pdf', size: '645 Kb', date: '15.11.2024', url: 'https://example.com/file4.pdf' },
];

const Files: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filemodal, setFileModal] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const filteredFiles = fileData.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Request permission for Android (Needed for camera & file access)
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs access to your camera to take pictures",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // Function to pick an image from gallery
  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorCode) {
      console.log('Image Picker Error: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri || null);
    }
  };

  // Function to take a photo using the camera


  return (
    <View style={tw`flex-1 p-4 bg-gray-100`}>
      {/* Search Bar */}
      <TextInput
        style={tw`bg-white p-3 rounded-lg mb-4 shadow-md`}
        placeholder="Search files"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* File List */}
      <FlatList
        data={filteredFiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center bg-white p-4 rounded-lg mb-3 border border-[#0000001F] shadow-md`}
          >
            <SvgXml xml={FileIcon} />
            <View style={tw`ml-3`}>
              <Text style={tw`text-lg font-bold`}>{item.name}</Text>
              <Text style={tw`text-gray-500`}>{item.size} • {item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* File Modal */}
      <Modal
        visible={filemodal}
        onRequestClose={() => setFileModal(false)}
        animationType="slide"
        transparent={true}
      >
        <View style={tw`flex-1 justify-end bg-black bg-opacity-50 items-start`}>
          <View style={tw`bg-white p-4 w-full rounded-lg`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`text-[#A8B4B7] font-semibold`}>Photo & Video</Text>
              <TouchableOpacity onPress={() => setFileModal(false)}>
                <Text style={tw`text-lg text-[#A8B4B7]`}>✖</Text>
              </TouchableOpacity>
            </View>

            {/* Upload Buttons */}
            <View style={tw`flex-row justify-start space-x-4 my-4`}>
              <TouchableOpacity onPress={handleImagePick} style={tw`p-3 bg-gray-200 rounded-lg`}>
                <SvgXml xml={imageupload} />

              </TouchableOpacity>

              <View>
                {/* Display Selected Image */}
                {image && (
                  <View style={tw`items-center mt-4`}>

                    <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                  </View>
                )}

              </View>

            </View>


            <View style={tw`px-4 mb-6`}>
              <TouchableOpacity>
                <Text style={tw`text-[#FF8858] font-semibold`}>View photo library</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw`text-[#374957] pt-4 font-semibold`}>Upload file</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

      {/* Floating Edit Button */}
      <TouchableOpacity onPress={() => setFileModal(true)} style={tw`absolute bottom-5 left-5`}>
        <SvgXml xml={EditIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Files;
