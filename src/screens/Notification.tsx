import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import tw from 'twrnc'; // Import twrnc

const notifications = [
  { id: "1", title: "New quote from John Appleseed", category: "Bathrooms & Plumbing", time: "Today 1:56PM" },
  { id: "2", title: "Robert Manager invited you to a new chat", category: "Rainbow Tiles", time: "Today 12:45PM" },
  { id: "3", title: "Leslie Howard assigned a new checklist to you", category: "Bathrooms & Plumbing", time: "Yesterday 12:45PM" },
  { id: "4", title: "Anna Romero replied to your quote request", category: "Rainbow Tiles", time: "12 Nov 12:45PM" },
];

const Notification = () => {
  const [visible, setVisible] = useState(false);  // Initially hidden

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      {/* Button to Open Notifications */}
      <TouchableOpacity onPress={() => setVisible(true)} style={tw`p-3 bg-blue-500 rounded-lg`}>
        <Text style={tw`text-white`}>Show Notifications</Text>
      </TouchableOpacity>

      {/* 📩 Notification Sidebar */}
      <Modal style={tw``}  animationType="slide" transparent={true} visible={visible}>
        <View style={tw`flex-1 bg-black bg-opacity-50 justify-end`}>
          <View style={tw` bg-white p-4 rounded-t-xl   shadow-md`}>
            {/* Header */}
            <View style={tw`flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-lg font-bold`}>🔔 Notification fg</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={tw`text-2xl text-gray-500`}>✖c</Text>
              </TouchableOpacity>
            </View>

            {/* Notification List */}
            <FlatList
              data={notifications}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={tw`p-2 bg-gray100 my-1 rounded-lg`}>
                  <Text style={tw`font-bold`}>{item.title}</Text>
                  <Text style={tw`text-xs text-gray mt-1`}>
                    {item.category} • {item.time}
                  </Text>
                </View>
              )}
            />

            {/* Mark all as read */}
            <TouchableOpacity
              style={tw`p-2 bg-red-500 rounded-lg items-center mt-4`}
              onPress={() => alert("All notifications marked as read!")}
            >
              <Text style={tw`text-white font-bold`}>Mark all as read</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notification;
