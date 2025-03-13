import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import tw from '../../../lib/tailwind'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const ForgetPassword = () => {
    const navigation = useNavigation();
    const {height} = Dimensions.get('window')

    return (
        <View style={tw`bg-[#FFFFFF] h-full`}>


            <View style={tw``}>
            <View style={[tw`bg-gray-200 flex flex-col items-center justify-center`, { height: height - 100 }]}>
                    <View style={tw`max-w-[250px] mx-auto mb-8`}>
                        <Image source={require('../../../assets/images/Logo.png')} />
                    </View>
                    <Text style={tw`text-[#646669] text-sm text-center max-w-[270px] mx-auto pt-4 mb-4`}>
                        Enter your email address in the field below, and we will send you a link to reset your password
                    </Text>
                    <View style={tw`p-4 w-full`}>
                        <TextInput placeholder='Email' style={tw`bg-[#EEF3F6] w-full rounded-md p-4 text-[16px] font-normal text-[#374957]`} />
                    </View>

                    <View style={tw`mt-12 `}>
                        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} >
                            <Text style={tw`text-[#FFFFFF] text-[16px] font-semibold bg-[#FF8858] w-[250px] mx-auto rounded-md p-4 text-center`}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={tw`flex flex-row `}>
                    <Text style={tw`text-[#8A91A0] text-sm text-center max-w-[250px] mx-auto pt-4`}>
                    Terms and Conditions     
                    </Text>
                    <Text style={tw`text-[#8A91A0] text-sm text-center max-w-[250px] mx-auto pt-4`}>
                    Privacy policy  
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ForgetPassword