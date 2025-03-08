import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {RightArrow} from '../../assets/Icons';
import TabsscreenHeader from '../../components/TabsscreenHeader';

interface InvoiceItem {
  description: string;
  quantity: number;
  amount: number;
  note?: string;
}

const InvoiceDetails: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(true);

  const invoiceItems: InvoiceItem[] = [
    {
      description: 'Property photography',
      quantity: 9,
      amount: 9000.0,
      note: 'Lorem ipsum dolor sit amet consectetur adipisem que',
    },
    {
      description: '3D floor plan',
      quantity: 1,
      amount: 800.0,
    },
    {
      description: 'Digital photo-album',
      quantity: 2,
      amount: 600.0,
      note: 'Amet consectetur adipisem que',
    },
  ];

  const subtotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0);
  const gst = subtotal * 0.1; // Assuming 10% GST
  const total = subtotal + gst;

  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw` bg-white`}>
        <TabsscreenHeader title="Invoices" />
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <ScrollView contentContainerStyle={tw`p-5`}>
          {/* Header */}
          <View style={tw`my-2.5 flex flex-row gap-1`}>
            <SvgXml xml={RightArrow} />
            <Text style={tw`text-sm text-gray-500`}>
              From: <Text style={tw`text-[#FF7D45]`}>Bathroom Bling quote</Text>
            </Text>
          </View>

          {/* Sender Info */}
          <View style={tw`mb-5`}>
            <Text style={tw`text-base font-bold text-gray-800 mb-1`}>
              John Appleseed, Appleseed Photo Services
            </Text>
            <Text style={tw`text-sm text-gray-500 mb-0.5`}>
              22 General Holmes drive, Kensington NSW 2036
            </Text>
            <Text style={tw`text-sm text-gray-500`}>
              john.appleseed@example.com
            </Text>
          </View>

          {/* Invoice Items Header */}
          <View style={tw`flex-row border-b-4 border-[#EEF2FB] py-4 mb-3`}>
            <Text style={tw`flex-3 text-xs text-gray-400 font-medium`}>
              ITEM DESCRIPTION
            </Text>
            <Text
              style={tw`flex-1 text-xs text-gray-400 font-medium text-center`}>
              QTY
            </Text>
            <Text
              style={tw`flex-2 text-xs text-gray-400 font-medium text-right`}>
              AMOUNT
            </Text>
          </View>

          {/* Invoice Items */}
          {invoiceItems.map((item, index) => (
            <View key={index} style={tw`flex-row my-2`}>
              <View style={tw`flex-3`}>
                <Text style={tw`text-[15px] font-semibold text-gray-800 mb-1`}>
                  {item.description}
                </Text>
                {item.note && (
                  <Text style={tw`text-[13px] text-gray-400`}>{item.note}</Text>
                )}
              </View>
              <Text style={tw`flex-1 text-[15px] text-gray-800 text-center`}>
                {item.quantity}x
              </Text>
              <Text
                style={tw`flex-2 text-[15px] font-semibold text-gray-800 text-right`}>
                $
                {item.amount.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
          ))}

          {/* Totals */}
          <View style={tw`mt-2.5 border-t-4 border-[#EEF2FB] pt-4`}>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-500`}>Sub total</Text>
              <Text style={tw`text-sm text-gray-800 font-medium`}>
                ${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2})}
              </Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-500`}>GST</Text>
              <Text style={tw`text-sm text-gray-800 font-medium`}>
                ${gst.toLocaleString('en-US', {minimumFractionDigits: 2})}
              </Text>
            </View>
            <View style={tw`flex-row justify-between mt-2 mb-6`}>
              <Text style={tw`text-base font-bold text-gray-800`}>
                Invoice total:
              </Text>
              <Text style={tw`text-base font-bold text-gray-800`}>
                ${total.toLocaleString('en-US', {minimumFractionDigits: 2})}
              </Text>
            </View>
          </View>

          {/* Payment Due */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-sm text-gray-500 mb-2`}>Payment due</Text>
            <View style={tw`flex-row items-center`}>
              {/* <CheckBox
              value={isChecked}
              onValueChange={setIsChecked}
              tintColors={{ true: '#999', false: '#999' }}
              style={tw`mr-2`}
            /> */}
              <Text style={tw`text-[15px] font-medium text-gray-800`}>
                24 Nov 2024
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={tw`bg-[#FF7D45] rounded py-4 items-center mb-3`}>
            <Text style={tw`text-white text-base font-semibold`}>
              Pay invoice
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`border border-[#FF7D45] rounded py-4 items-center mb-4`}>
            <Text style={tw`text-[#FF7D45] text-base font-semibold`}>
              Decline
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`items-center mb-5`}>
            <Text style={tw`text-[#FF7D45] text-[15px]`}>Download PDF</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default InvoiceDetails;
