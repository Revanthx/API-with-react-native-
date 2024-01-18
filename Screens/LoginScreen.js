// src/screens/LoginScreen.js
import React from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = () => {
    // Implement login logic here
    // Redirect to HomeScreen on successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.title}>Login Here</Text>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="white" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="white" />
      <Button title="Login" onPress={handleLoginPress} />
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={handleSignUpPress}>
          Sign Up Here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'white',
  },
  signupText: {
    marginTop: 20,
    color: 'white',
  },
  signupLink: {
    color: 'blue',
  },
});

export default LoginScreen;
