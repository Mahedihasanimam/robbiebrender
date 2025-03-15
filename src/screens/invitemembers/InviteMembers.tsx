import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from '../../lib/tailwind'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from 'react-native-ui-lib'
import { SvgXml } from 'react-native-svg'
import { avater, chakedChakmark, unchakedChakmark, UserIcon, UserPlus } from '../../assets/Icons'

const InviteMembers = ({navigation}) => {

    const [selectedRole, setSelectedRole] = React.useState('')
      const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={tw`w-full bg-white bg-opacity-5 h-full`}>
       <View style={tw`flex-1 justify-end items-start `}>
          <View
            style={tw`bg-white border border-[#F9FBFB] shadow-lg p-5 rounded-t-3xl w-full`}>
            <View style={tw`flex flex-row items-center  justify-between`}>
              <Text style={tw` text-[#A8B4B7] font-semibold text-sm`}>
                Quick add users
              </Text>
              <TouchableOpacity onPress={() => navigation?.goBack()}>
                <Text style={tw`text-2xl text-[#202F3A]`}>✖</Text>
              </TouchableOpacity>
            </View>

            <View style={tw`flex flex-row items-center justify-center gap-4`}>
              <TouchableOpacity
                style={tw`bg-[#374957] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
                <Text style={tw`text-white font-semibold text-base`}>Team</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-[#EEF3F6] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
                <Text style={tw`text-[#202F3A] font-semibold text-base`}>
                  Suppliers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-[#EEF3F6] p-2 rounded-md mt-6 border border-[#F9FBFB] w-[30%] flex flex-row items-center justify-center`}>
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
    </View>
  )
}

export default InviteMembers