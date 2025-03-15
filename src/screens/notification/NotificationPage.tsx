import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';

// Reusable Checkbox Component
const NotificationItem = ({ label, value, onChange }) => (
  <View style={tw`flex-row items-center mb-1`}>
    <CheckBox value={value} onValueChange={onChange} />
    <Text style={tw`ml-2 text-[#374957] font-medium`}>{label}</Text>
  </View>
);

const NotificationPage = () => {
  const [pauseNotifications, setPauseNotifications] = useState(false);
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState('8 AM');
  const [selectedFromTime, setSelectedFromTime] = useState('8 PM');

  const [notifications, setNotifications] = useState({
    newChats: false,
    newTasks: false,
    terms1: false,
  });

  const [emailNotifications, setEmailNotifications] = useState({
    newChats: false,
    newTasks: false,
    terms1: false,
  });

  const notificationOptions = [
    { key: 'newChats', label: 'New chats' },
    { key: 'newTasks', label: 'New tasks' },
    { key: 'terms1', label: 'I accept & agree to the terms & conditions' },
  ];

  return (
    <View style={tw`bg-white h-full p-4`}>
      {/* Pause All Notifications */}
      <View style={tw`flex-row items-center gap-2 mb-4`}>
        <Switch value={pauseNotifications} onValueChange={setPauseNotifications} />
        <Text style={tw`text-[16px] font-semibold text-[#222325]`}>Pause all notifications</Text>
      </View>

      {/* Notify Me About */}
      <Text style={tw`text-lg font-semibold text-gray mb-2`}>Notify me about:</Text>
      {notificationOptions.map(({ key, label }) => (
        <NotificationItem
          key={key}
          label={label}
          value={notifications[key]}
          onChange={() => setNotifications({ ...notifications, [key]: !notifications[key] })}
        />
      ))}
  
      {/* Email Notifications */}
      <Text style={tw`text-lg font-semibold text-gray mt-4 mb-2`}>
        Also send me an email every time when:
      </Text>
      {notificationOptions.map(({ key, label }) => (
        <NotificationItem
          key={key}
          label={label}
          value={emailNotifications[key]}
          onChange={() => setEmailNotifications({ ...emailNotifications, [key]: !emailNotifications[key] })}
        />
      ))}

      {/* Do Not Disturb */}
      <View style={tw`flex-row items-center  mt-6 mb-8`}>
        <Switch value={doNotDisturb} onValueChange={setDoNotDisturb} />
        <Text style={tw`text-lg font-semibold text-gray`}>Do not disturb</Text>
      </View>

      {/* Time Pickers */}
      <View style={tw`flex-row justify-between`}>
        <View style={tw`w-1/2`}>
          <Text style={tw`text-[#374957] font-medium mb-1`}>To</Text>
          <Picker selectedValue={selectedToTime} onValueChange={setSelectedToTime}>
            {['8 AM', '9 AM', '10 AM'].map((time) => (
              <Picker.Item key={time} label={time} value={time} />
            ))}
          </Picker>
        </View>

        <View style={tw`w-1/2`}>
          <Text style={tw`text-[#374957] font-medium mb-1`}>From</Text>
          <Picker selectedValue={selectedFromTime} onValueChange={setSelectedFromTime}>
            {['8 PM', '9 PM', '10 PM'].map((time) => (
              <Picker.Item key={time} label={time} value={time} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;
