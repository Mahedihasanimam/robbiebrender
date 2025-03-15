import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import RNPickerSelect from 'react-native-picker-select';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { clockicon, colorfulldownarrow, colorfulluparrow } from '../../assets/Icons';


const YouandYourbusiness = () => {
  const [activeSection, setActiveSection] = useState('id');
  const [idType, setIdType] = useState('Driver license');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [validTill, setValidTill] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <View style={tw` bg-white h-full`}>
      {/* Header Notification */}
      <View style={tw`p-3 bg-[#FFF1E4] rounded-lg mb-4`}>
        <Text style={tw`text-[#6a6b6e]  font-semibold text-[16px]`}>
          Finish setting your account to use Quoting & Invoicing functionality
        </Text>
      </View>

      {/* Steps Info */}

      <View style={tw`flex flex-row gap-2 pr-4  py-3 border-b border-[#EEF3F6]`}>
        <SvgXml xml={clockicon} />
        <Text style={tw`text-[#374957] text-[16px] mb-2`}>
          The whole process only takes around 5 mins to complete and
          <Text style={tw`font-bold`}> only needs to be done once</Text>
        </Text>
      </View>

      {/* ACCORDION SECTION */}

      {/* Company & its representatives */}
      <TouchableOpacity onPress={() => toggleSection('company')} style={tw`py-3 border-b border-[#EEF3F6]`}>
        <View style={tw`flex flex-row items-center gap-1`}>
          <SvgXml xml={activeSection === 'company' ? colorfulluparrow : colorfulldownarrow} />
          <Text style={tw` text-lg  font-semibold  items-center ${activeSection === 'company' ? 'text-[#FF8858]' : 'text-[#374957]'} ml-2`}>
            Company & its representatives
          </Text>
        </View>

      </TouchableOpacity>

      <Collapsible collapsed={activeSection !== 'company'}>
        <View style={tw`p-3 bg-gray-100 rounded-md`}>
          <Text style={tw`text-[#0FAB31]`}>✔ Completed</Text>
        </View>
      </Collapsible>

      {/* ID Verification */}
      <TouchableOpacity onPress={() => toggleSection('id')} style={tw`py-3 border-b border-[#EEF3F6]`}>

        <View style={tw`flex flex-row items-center gap-2`}>
          <SvgXml xml={activeSection === 'id' ? colorfulluparrow : colorfulldownarrow} />
          <Text style={tw`text-lg font-semibold ${activeSection === 'id' ? 'text-[#FF8858]' : 'text-[#374957]'}`}>
            ID verification
          </Text>
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={activeSection !== 'id'}>
        <View style={tw`pt-2 bg-gray-100 rounded-md`}>
          <Text style={tw`text-[#374957] text-[16px] font-bold`}>Verify your ID</Text>

          {/* ID Type Picker */}
          <View style={tw`border border-[#EEF3F6] rounded-md p-2 mt-2 bg-[#EEF3F6]`}>
            <Text>ID type</Text>
            <RNPickerSelect
              onValueChange={(value) => setIdType(value)}
              items={[
                { label: 'Driver license', value: 'Driver license' },
                { label: 'Passport', value: 'Passport' },
              ]}
              value={idType}
            />
          </View>

          {/* License Number Input */}
          <TextInput
            placeholder="Driver license number"
            style={tw`border border-[#EEF3F6] bg-[#EEF3F6] text-[#374957] text-[16px] rounded-md p-3 mt-3`}
            onChangeText={setLicenseNumber}
            value={licenseNumber}
          />

          {/* Valid Till Input */}
          <TextInput
            placeholder="Valid till DD-MM-YYYY"
            style={tw`border border-[#EEF3F6] bg-[#EEF3F6] text-[#374957] text-[16px] rounded-md p-3 mt-3`}
            onChangeText={setValidTill}
            value={validTill}
          />

          {/* Upload Front Photo */}
          <TouchableOpacity style={tw`border border-[#EEF3F6] rounded-md p-2 bg-[#EEF3F6] mt-3 flex flex-row items-center justify-between`}>
            <Text style={tw`text-[#374957] text-[16px]`}>Upload front photo of your license</Text>

            <View style={tw`bg-[#FF8858] px-4 py-2 rounded-sm`}>
              <Text style={tw`text-white`}>Browse</Text>
            </View>
          </TouchableOpacity>

          {/* Upload Back Photo */}
          <TouchableOpacity style={tw`border border-[#EEF3F6] rounded-md p-2 bg-[#EEF3F6] mt-3 flex flex-row items-center justify-between`}>
            <Text style={tw`text-[#374957] text-[16px]`}>Upload back photo of your license</Text>

            <View style={tw`bg-[#FF8858] px-4 py-2 rounded-sm`}>
              <Text style={tw`text-white`}>Browse</Text>
            </View>
          </TouchableOpacity>

          {/* Agreement */}
          <Text style={tw`text-[#374957] text-lg font-bold my-4`}>
            By clicking next, you agree that:
          </Text>
          <Text style={tw`text-[#717B7D] text-[14px]`}>
            • Your information will be passed to XXX and YYY
          </Text>
          <Text style={tw`text-[#717B7D] text-[15px] mt-1`}>Agree to the  Possibl Credit Guide Possibl Privacy Consent</Text>
         

          {/* Next Step Button */}
          <TouchableOpacity style={tw`bg-[#FF8858] p-3 rounded-sm mt-5`}>
            <Text style={tw`text-white text-lg text-center font-semibold`}>Next step</Text>
          </TouchableOpacity>
        </View>
      </Collapsible>

      {/* Review & Submit */}
      <TouchableOpacity onPress={() => toggleSection('review')} style={tw`py-3 border-b border-[#EEF3F6]`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <SvgXml xml={activeSection === 'review' ? colorfulluparrow : colorfulldownarrow} />
        <Text style={tw`text-lg font-semibold ${activeSection === 'review' ? 'text-[#FF8858]' : 'text-[#374957]'}`}>
           Review & Submit
        </Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={activeSection !== 'review'}>
        <View style={tw`p-3 bg-gray-100 rounded-md`}>
          <Text style={tw`text-gray-600`}>✔ Ready for submission</Text>
        </View>
      </Collapsible>

    </View>
  );
};

export default YouandYourbusiness;
