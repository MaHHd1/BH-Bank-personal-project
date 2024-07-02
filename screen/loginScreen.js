
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login({ switchToSignUp, login, switchToForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      const isAdmin = username === 'admin' && password === 'admin';
      login({ username, password, isAdmin });
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.tinyLogo} source={require('../assets/BH_BANK.png')} />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={switchToSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={switchToForgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ff5c5c',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});



