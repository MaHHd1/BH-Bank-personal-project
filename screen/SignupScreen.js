import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function SignUp({ switchToLogin, signUp }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [education, setEducation] = useState('');
  const [university, setUniversity] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      const userInfo = { name, surname, education, university, username, email, password };
      signUp(userInfo);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.tinyLogo} source={require('../assets/BH_BANK.png')} />
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label1}>Name</Text>
            <TextInput style={styles.input1} placeholder='Enter your name' value={name} onChangeText={setName} />

            <Text style={styles.label1}>Surname</Text>
            <TextInput style={styles.input1} placeholder='Enter your surname' value={surname} onChangeText={setSurname} />

            <Text style={styles.label1}>Education</Text>
            <TextInput style={styles.input1} placeholder='Enter your educational level' value={education} onChangeText={setEducation} />

            <Text style={styles.label1}>University</Text>
            <TextInput style={styles.input1} placeholder='Enter your university' value={university} onChangeText={setUniversity} />
          </View>

          <View style={styles.divider} />

          <View style={styles.column}>
            <Text style={styles.label2}>GitHub</Text>
            <TextInput style={styles.input2} placeholder='Enter your username' value={username} onChangeText={setUsername} />

            <Text style={styles.label2}>Email</Text>
            <TextInput style={styles.input2} placeholder='Enter your email' keyboardType='email-address' value={email} onChangeText={setEmail} />

            <Text style={styles.label2}>Password</Text>
            <TextInput style={styles.input2} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword} />

            <Text style={styles.label2}>Confirm</Text>
            <TextInput style={styles.input2} placeholder='Confirm your password' secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={switchToLogin}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
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
      padding: 60,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    row: {
      flexDirection: 'row',
    },
    column: {
      flex: 1,
      paddingHorizontal: 0,
    },
    divider: {
      width: 1,
      backgroundColor: '#ddd',
      margin: 1,
    },
    label1: {
      fontSize: 16,
      marginBottom: 5,
      padding: 1,
      fontWeight: 'bold',
      right: 50,
    },
    label2: {
      fontSize: 16,
      marginBottom: 5,
      padding: 1,
      fontWeight: 'bold',
      left: 10,
    },
    input1: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 1,
      margin: 1,
      padding: 10,
      borderRadius: 10,
      right: 50,
      width: 130,
    },
    input2: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 1,
      margin: 1,
      padding: 10,
      borderRadius: 10,
      left: 10,
      width: 130,
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
      paddingHorizontal: 1,
      borderRadius: 7,
      alignItems: 'center',
      marginVertical: 7,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    linkButton: {
      marginTop: 5,
      alignItems: 'center',
    },
    linkText: {
      color: '#ff5c5c',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });


