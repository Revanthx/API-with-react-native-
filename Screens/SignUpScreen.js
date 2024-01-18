import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUpPress = () => {
    
    if (!firstName || !lastName || !username || !email || !phoneNumber || !password) {
      alert('All fields are mandatory. Please fill them.');
    } else {
      setSuccessMessage('Successfully signed up!');

      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000); 
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.title}>Sign Up Here</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        placeholderTextColor="white"
      />
      <Button title="Sign Up" onPress={handleSignUpPress} />
      {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
      <Text style={styles.termsText}>
        By signing up, you agree to the terms and conditions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'white',
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
  },
  termsText: {
    marginTop: 20,
    textAlign: 'center',
    color:'white',
  },
});

export default SignUpScreen;
