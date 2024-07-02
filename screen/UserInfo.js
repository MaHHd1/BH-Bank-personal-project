
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

export default function UserInfo({ user, logout }) {
  const openGitHub = () => {
    if (user && user.username) {
      Linking.openURL(`https://github.com/${user.username}`);
    } else {
      alert('GitHub username not available');
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={user.imageUri ? { uri: user.imageUri } : require('../assets/BH_BANK.png')}
        />
        <Text style={styles.profileName}>{user.name} {user.surname}</Text>
        <Text style={styles.profileTitle}>Intern</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => openLink(`https://www.facebook.com/BHBank/`)}>
            <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(`https://www.linkedin.com/company/bh-bank/`)}>
            <FontAwesome name="linkedin" size={24} color="#0e76a8" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(`https://www.instagram.com/bh_bank/?hl=en`)}>
            <FontAwesome name="instagram" size={24} color="#C13584" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoHeader}>Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>University:</Text>
          <Text style={styles.infoValue}>{user.university}</Text>
        </View>
        <Text style={styles.infoHeader}>Projects</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>GitHub:</Text>
          <TouchableOpacity onPress={openGitHub} style={styles.githubLink}>
            <Image
              style={styles.githubImage}
              source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }}
            />
            <Text style={styles.githubText}>@{user.username}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Education:</Text>
          <Text style={styles.infoValue}>{user.education}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: '#ff4757',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    width: 100,
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  githubLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  githubImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  githubText: {
    fontSize: 16,
    color: '#0366d6',
  },
});







