import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {SvgXml} from 'react-native-svg';
import tw from 'twrnc';
import {avater, backIcon, chakedChakmark, seetingIcon, seetingIcongray, Threedote, unchakedChakmark, UserIcon, UserPlus, UserPlusgray} from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';

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
}) => {
  const navigateion = useNavigation();
  const [seetingmodal, setseetingmodal] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      style={tw` flex flex-row items-center justify-between px-2 py-3 bg-gray-50 border-b border-gray-200`}>
      {/* Back Button */}

      <View style={tw`flex flex-row gap-1 items-center`}>
        <TouchableOpacity
          style={tw`w-10 h-10 justify-center ${showBack ? '' : 'invisible'}`}
          onPress={() => navigateion.goBack()}>
          <SvgXml xml={backIcon} />
        </TouchableOpacity>

        <Text style={tw` text-base font-medium text-gray-700 text-center mx-2`}>
          {title}
        </Text>
      </View>

      {/* Menu Button */}

      <View style={tw`flex flex-row  items-center`}>
        <TouchableOpacity
          style={tw`w-10 h-10 justify-center items-center ${
            showMenu ? '' : 'invisible'
          }`}
          onPress={onMenuPress}>
          <SvgXml xml={UserPlusgray } />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-10 h-10 justify-center items-center ${
            showMenu ? '' : 'invisible'
          }`}
          onPress={() => setseetingmodal(true)}>
          <SvgXml xml={seetingIcongray} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={seetingmodal}
        transparent
        animationType="slide"
        onRequestClose={() => setseetingmodal(false)}>
        <View style={tw`flex-1 justify-end items-start `}>
          <View
            style={tw`bg-white border border-[#F9FBFB] shadow-lg p-5 rounded-t-3xl w-full`}>
            <View style={tw`flex flex-row items-center  justify-between`}>
              <Text style={tw` text-[#A8B4B7] font-semibold text-sm`}>
              Quick add users
              </Text>
              <TouchableOpacity
                onPress={() => setseetingmodal(false)}>
                <Text style={tw`text-2xl text-[#202F3A]`}>✖</Text>
              </TouchableOpacity>
            </View>

            <View style={tw`flex flex-row items-center justify-center gap-4`}>
              <TouchableOpacity style={tw`bg-[#374957] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
                <Text style={tw`text-white font-semibold text-base`}>
                Team
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-[#EEF3F6] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
                <Text style={tw`text-[#202F3A] font-semibold text-base`}>
                Suppliers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-[#EEF3F6] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
                <Text style={tw`text-[#202F3A] font-semibold text-base`}>
                Add new
                </Text>
              </TouchableOpacity>
            </View>

            <View style={tw`flex flex-row items-center justify-between mt-4`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>John Appleseed</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Marta Dobson</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Thomas Mitchell</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Robert Lee</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Robert Lee</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Robert Lee</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row gap-2 py-2`}>
                <SvgXml xml={avater} />
                <Text style={tw`text-[#202F3A] ml-2`}>Robert Lee</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                  {isChecked ? (
                    <SvgXml xml={chakedChakmark} />
                  ) : (
                    <SvgXml xml={unchakedChakmark} />
                  )}
                </TouchableOpacity>
              </View>
            </View>


            <TouchableOpacity
              style={tw`bg-[#FF8858] flex flex-row items-center justify-center p-3 rounded-sm mt-8`}>
             
              <Text style={tw`text-white text-[16px] font-medium ml-2`}>
              Add selected
              </Text>
            </TouchableOpacity>
       
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TabsscreenHeader;
