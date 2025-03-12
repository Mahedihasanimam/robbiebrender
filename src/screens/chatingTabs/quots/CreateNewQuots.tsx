import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import TabsscreenHeader from '../../../components/TabsscreenHeader';
import tw from '../../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { addicon, addsection, atachmenticon, chakedChakmark, exlametoryicon, unchakedChakmark } from '../../../assets/Icons';
import { Modal } from 'react-native-ui-lib';
interface Item {
  description: string;
  price: string;
  quantity: string;
}

interface Section {
  title: string;
  description: string;
  items: Item[];
}


const CreateNewQuots = () => {
  const [otherProjectCost, setOtherProjectCost] = useState('0.00');
  const [paymentOption, setPaymentOption] = useState('');
  const [allowAmendments, setAllowAmendments] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');



  const [currentSectionIndex, setCurrentSectionIndex] = useState<number | null>(null);


  const [sections, setSections] = useState<Section[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const [sectionTitle, setSectionTitle] = useState<string>('');
  const [sectionDescription, setSectionDescription] = useState<string>('');

  const [itemDescription, setItemDescription] = useState<string>('');
  const [itemPrice, setItemPrice] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const openModal = (type: string, sectionIndex?: number) => {
    setModalType(type);
    setCurrentSectionIndex(sectionIndex ?? null);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSectionTitle('');
    setSectionDescription('');
    setItemDescription('');
    setItemPrice('');
    setItemQuantity('');
  };

  const addSection = () => {
    if (sectionTitle && sectionDescription) {
      setSections([...sections, { title: sectionTitle, description: sectionDescription, items: [] }]);
      closeModal();
    }
  };


  const addItem = () => {
    if (itemDescription && itemPrice && itemQuantity && currentSectionIndex !== null) {
      const updatedSections = [...sections];
      updatedSections[currentSectionIndex].items.push({
        description: itemDescription,
        price: itemPrice,
        quantity: itemQuantity,
      });
      setSections(updatedSections);
      closeModal();
    }
  };


  useEffect(() => {
    let total = 0;
    sections.forEach((section) => {
      section.items.forEach((item) => {
        total += parseFloat(item.price) 
      });
    });
    setTotalPrice(total);
  }, [sections]);
  return (
    <ScrollView style={tw`bg-white`}>
      <TabsscreenHeader title="Create New Quote" />




      <View style={tw`p-4`}>

        <View style={tw``}>
          <Text style={tw`font-bold text-lg mb-2 text-[#222325]`}>
            John Appleseed, Appleseed Photo Services
          </Text>
          <Text style={tw`text-gray mb-2`}>
            22 General Holmes drive, Kensington NSW 2036
          </Text>
          <Text style={tw`text-gray mb-4`}>john.appleseed@example.com</Text>
        </View>

        <View style={tw``}>
          <View
            style={tw`flex flex-row  items-center justify-between border-b-2 pb-4   border-[#EEF2FB]`}>
            <TouchableOpacity>
              <Text style={tw`text-[#8A91A0] text-[16px]`}>ITEM</Text>
            </TouchableOpacity>

            <View style={tw`flex gap-4 flex-row items-center justify-between`}>
              <TouchableOpacity>
                <Text style={tw`text-[#8A91A0] text-[16px]`}>Qty</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw`text-[#8A91A0] text-[16px]`}>Amount</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>



        

       
      <View style={tw``}>
        {/* Sections & Items */}
        {sections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={tw`my-4 pb-4 border-b border-[#C6D0D2]`}>
            {/* Section Title & Description */}
            <Text style={tw`text-[16px] font-bold text-[#FF8858]`}>{section.title}</Text>
            <Text style={tw`text-sm text-[#717B7D] pt-2`}>{section.description}</Text>

            {/* Items Under Each Section */}
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={tw`flex flex-row items-center justify-between border-t border-[#EEF2FB] py-2 mt-4`}>
                <Text style={tw`text-[#222325] text-[16px]`}>{item.description}</Text>
                <View style={tw`flex flex-row gap-4`}>
                  <Text style={tw`text-[#222325]`}>{item.quantity}</Text>
                  <Text style={tw`text-[#222325]`}>${item.price}</Text>
                </View>
              </View>
            ))}

            {/* Add Item Button for this Section */}
            <TouchableOpacity
              onPress={() => openModal('item', sectionIndex)}
              style={tw`mt-2 bg-gray-300 p-2 flex-row items-center gap-2`}>
              <SvgXml xml={addicon} />
              <Text style={tw`text-[#FF8858]`}>Add Item</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Section Button */}
        <TouchableOpacity onPress={() => openModal('section')} style={tw`mt-4 bg-gray-300 p-2 flex-row items-center gap-2`}>
          <SvgXml xml={addsection} />
          <Text style={tw`text-[#FF8858]`}>Add Section</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Adding Section or Item */}
      {/* {modalVisible && (
        <View style={tw`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center`}>
          <View style={tw`bg-white p-4 rounded-lg w-4/5`}>
            {modalType === 'section' ? (
              <>
                <Text style={tw`text-lg font-bold mb-2`}>Add Section</Text>
                <TextInput
                  style={tw`border p-2 mb-2`}
                  placeholder="Section Title"
                  value={sectionTitle}
                  onChangeText={setSectionTitle}
                />
                <TextInput
                  style={tw`border p-2 mb-2`}
                  placeholder="Section Description"
                  value={sectionDescription}
                  onChangeText={setSectionDescription}
                />
                <TouchableOpacity onPress={addSection} style={tw`bg-blue-500 p-2 rounded`}>
                  <Text style={tw`text-white text-center`}>Add Section</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={tw`text-lg font-bold mb-2`}>Add Item</Text>
                <TextInput
                  style={tw`border p-2 mb-2`}
                  placeholder="Item Description"
                  value={itemDescription}
                  onChangeText={setItemDescription}
                />
                <TextInput
                  style={tw`border p-2 mb-2`}
                  placeholder="Price"
                  value={itemPrice}
                  onChangeText={setItemPrice}
                  keyboardType="numeric"
                />
                <TextInput
                  style={tw`border p-2 mb-2`}
                  placeholder="Quantity"
                  value={itemQuantity}
                  onChangeText={setItemQuantity}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={addItem} style={tw`bg-blue-500 p-2 rounded`}>
                  <Text style={tw`text-white text-center`}>Add Item</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity onPress={closeModal} style={tw`mt-2`}>
              <Text style={tw`text-center text-red-500`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )} */}







{/* 
        <View style={tw``}>
          <View style={tw`flex-row  `}>
            <TouchableOpacity onPress={() => openModal('item')} style={tw`px-3 bg-gray-300 flex-row items-center gap-2`}>
              <SvgXml xml={addicon} />
              <Text style={tw`text-[#FF8858]`}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openModal('section')} style={tw`px-3 bg-gray-300 flex-row items-center gap-2`}>
              <SvgXml xml={addsection} />
              <Text style={tw`text-[#FF8858]`}>Add Section</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>





      <View style={tw`p-4`}>
        <Text style={tw`text-[#8A91A0] font-normal mt-2`}>
          Additional comments / Special requirements
        </Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#8A91A0] py-3  mb-3`}
          placeholder="Type in any additional information here"
        />

        <TouchableOpacity
          style={tw`py-3 mt-4 bg-gray-300  mb-2 items-center flex flex-row  gap-2`}>
          <SvgXml xml={atachmenticon} />
          <Text style={tw`font-semibold text-[#FF8858]`}>Add Attachment</Text>
        </TouchableOpacity>

        <Text style={tw`font-normal text-[#8A91A0]  mt-2`}>
          Other project fee(s){' '}
        </Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#222325] py-3  mb-3 w-[40%]`}
          value={otherProjectCost}
          onChangeText={setOtherProjectCost}
          keyboardType="numeric"
        />

        <View style={tw`border-t border-[#EEF2FB] mt-6`}>
          <View
            style={tw`flex flex-col items-end justify-end text-[#717B7D] py-2`}>
            <Text style={tw`text-lg mt-1`}>Sub total: ${totalPrice.toFixed(2)}</Text>
            <Text style={tw`text-lg mt-1`}>GST: $300.00</Text>
            <Text style={tw` font-bold text-[20px] mt-1 text-[#222325]`}>
              Quote total: $ ${(totalPrice + 300).toFixed(2)}
            </Text>

       
          </View>
        </View>

      </View>
      <View style={tw`bg-[#F9FBFB] p-4 border-t border-[#C6D0D2]`}>
        <Text style={tw`font-bold mt-2 text-[#8A91A0]`}>Valid Until</Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#8A91A0] py-3  mb-3`}
          placeholder="Select date"
        />

        <Text style={tw`font-bold mt-2`}>Payment Options</Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#8A91A0] py-3  mb-3`}
          placeholder="Select"
          value={paymentOption}
          onChangeText={setPaymentOption}
        />

        <Text style={tw`font-bold mt-2`}>Estimated Start Date</Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#8A91A0] py-3  mb-3`}
          placeholder="Select date"
          value={startDate}
          onChangeText={setStartDate}
        />

        <Text style={tw`font-bold mt-4`}>Estimated Completion Date</Text>
        <TextInput
          style={tw`border-b border-[#C6D0D2] text-[#8A91A0]   `}
          placeholder="Select date"
          value={completionDate}
          onChangeText={setCompletionDate}
        />

        <View style={tw`py-4`}>

          <View style={tw`flex-row items-center mt-3`}>
            <SvgXml xml={unchakedChakmark} />
            <Text style={tw`ml-2 text-[#374957]`}>Allow amendments & variations</Text>
          </View>
          <View style={tw`flex-row items-center mt-3`}>
            <SvgXml xml={unchakedChakmark} />
            <Text style={tw`ml-2 text-[#374957]`}>Add custom Terms & Conditions</Text>
          </View>
        </View>



        <TouchableOpacity
          style={tw`p-4 bg-[#FF8858]  items-center mt-5 rounded-md`}>
          <Text style={tw`text-white font-bold`}>Finalize & Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-4 bg-gray-300  mb-2 items-start flex flex-row gap-2 `}>

          <SvgXml xml={exlametoryicon} />
          <Text style={tw`text-[#717B7D] text-[14px]`}>Your customer / client won't see the custom margins you applied and will only see the line item total. Project fee(s) will be visible and added as a line item. Original copies of your supplier quotes will be available in Requested Quotes.</Text>
        </TouchableOpacity>

      </View>



      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={tw`flex-1 justify-end items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-6 rounded-lg w-full`}>

            <View style={tw`flex flex-row items-center  justify-between my-6`}>
              <Text style={tw` text-[#A8B4B7] font-semibold text-sm`}>
                {modalType === 'section' ? 'Add Section' : 'Add Item'}
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={tw`text-lg text-[#A8B4B7]`}>✖</Text>
              </TouchableOpacity>
            </View>


            {modalType === 'section' ? (
              <>
                <View>
                  <Text style={tw`text-[#8A91A0] text-sm`}>Section title</Text>
                  <TextInput style={tw`border-b border-[#C6D0D2] py-2 mb-2`} placeholder="Floor tiles" value={sectionTitle} onChangeText={setSectionTitle} />
                </View>


                <View style={tw`mt-6`}>
                  <Text style={tw`text-[#8A91A0] text-sm`}>Description</Text>
                  <TextInput style={tw`border-b border-[#C6D0D2] py-2 mb-2`} placeholder="Section Description" value={sectionDescription} onChangeText={setSectionDescription} />
                </View>

                <TouchableOpacity onPress={addSection} style={tw`bg-[#FF8858]  p-4 rounded-sm mt-6`}>
                  <Text style={tw`text-white text-center font-semibold`}>Add Section</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>

                <TextInput style={tw`border p-2 mb-2`} placeholder="Item Description" value={itemDescription} onChangeText={setItemDescription} />
                <TextInput style={tw`border p-2 mb-2`} placeholder="Price" value={itemPrice} onChangeText={setItemPrice} keyboardType="numeric" />
                <TextInput style={tw`border p-2 mb-2`} placeholder="Quantity" value={itemQuantity} onChangeText={setItemQuantity} keyboardType="numeric" />
                <TouchableOpacity onPress={addItem} style={tw`bg-[#FF8858]   p-4 rounded-sm mt-6`}>
                  <Text style={tw`text-white text-center font-semibold `}>Add Item</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default CreateNewQuots;
