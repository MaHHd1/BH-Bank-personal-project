import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import axios from 'axios';

export default function ForgotPassword({ switchToLogin }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    setLoading(true);

    try {
     
      const serverUrl = `http://192.168.100.173:3000`;

      console.log('Sending request to server with email:', email);
      const response = await axios.post(`${serverUrl}/forgot-password`, { email });
      console.log('Server response:', response.data);

      setLoading(false);
      Alert.alert('Reset Password', 'Instructions sent to your email');
      switchToLogin();
    } catch (error) {
      console.error('Error in Axios request:', error);
      setLoading(false);
      Alert.alert('Error', 'Failed to send reset instructions. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.label}>Enter your email to reset your password:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        editable={!loading}
        accessibilityLabel="Email input"
      />
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleResetPassword} 
        disabled={loading}
        accessibilityLabel="Reset Password button"
      >
        <Text style={styles.buttonText}>{loading ? 'Sending...' : 'Reset Password'}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={switchToLogin} 
        disabled={loading}
        accessibilityLabel="Back to Login button"
      >
        <Text style={styles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ff5c5c',
    fontSize: 16,
  },
});





