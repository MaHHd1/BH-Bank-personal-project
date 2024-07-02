import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, TextInput, Button } from 'react-native';

const initialUsersData = [
  { id: '1', name: 'Mahdi Lakhoua', username: 'MaHHd1', email: 'mehdilakhoua123@gmail.com', education: 'Computer Science', university: 'esprit' },
  { id: '2', name: '', username: '', email: '', education: '', university: '' },
];

export default function AdminPage({ logout }) {
  const [users, setUsers] = useState(initialUsersData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const handleRemove = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleSave = () => {
    setUsers(users.map(user => (user.id === selectedUser.id ? selectedUser : user)));
    setModalVisible(false);
  };

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <Image style={styles.userImage} source={require('../assets/BH_BANK.png')} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userDetails}>Username: {item.username}</Text>
        <Text style={styles.userDetails}>Email: {item.email}</Text>
        <Text style={styles.userDetails}>Education: {item.education}</Text>
        <Text style={styles.userDetails}>University: {item.university}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Dashboard</Text> 
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit User</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={selectedUser.name || ''}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={selectedUser.username || ''}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, username: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={selectedUser.email || ''}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Education"
              value={selectedUser.education || ''}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, education: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="University"
              value={selectedUser.university || ''}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, university: text })}
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});






