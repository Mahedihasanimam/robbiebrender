import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { FileIcon } from '../../assets/Icons';


interface FileItem {
  id: string;
  name: string;
  size: string;
  date: string;
}

const fileData: FileItem[] = [
  { id: '1', name: 'Inspection photos 32 Rivers str.zip', size: '645 Kb', date: '15.11.2024' },
  { id: '2', name: 'Business Expences.xlsx', size: '645 Kb', date: '15.11.2024' },
  { id: '3', name: 'Inspection photo.png', size: '645 Kb', date: '15.11.2024' },
  { id: '4', name: 'ContractCopy.pdf', size: '645 Kb', date: '15.11.2024' },
  { id: '5', name: 'Proposal.pdf', size: '645 Kb', date: '15.11.2024' },
  { id: '6', name: 'ContractCopy(2).pdf', size: '645 Kb', date: '15.11.2024' },
];

const Files: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = fileData.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search files"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {/* File List */}
      <FlatList
        data={filteredFiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.fileItem}>
          <SvgXml xml={FileIcon}/>
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{item.name}</Text>
              <Text style={styles.fileDetails}>{item.size} • {item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  fileInfo: {
    marginLeft: 10,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileDetails: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Files;
