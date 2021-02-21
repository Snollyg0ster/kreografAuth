import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthenticationState = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text style={styles.statusText}>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.statusText}>{user.email}</Text>
    </View>
  );
};

const signIn = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.signInScreen}>
      <StatusBar backgroundColor="orange" />
      <View style={styles.navigationBar}>
        <Text style={styles.text}>Authentification</Text>
      </View>
      <View style={styles.inputContainer}>
        <AuthenticationState />
        <TextInput
          style={styles.loginOrPassword}
          placeholder="email"
          onChangeText={(mail) => setEmail(mail)}
        />
        <TextInput
          style={styles.loginOrPassword}
          placeholder="password"
          onChangeText={(pass) => setPassword(pass)}
          onSubmitEditing={() => signIn(email, password)}
        />
        <Text>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInScreen: {
    display: 'flex',
  },
  text: {
    fontSize: 30,
  },
  navigationBar: {
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
    padding: 17,
  },
  inputContainer: {
    height: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginOrPassword: {
    width: 300,
    height: 35,
    borderBottomWidth: 2,
    borderBottomColor: 555,
    marginBottom: 15,
  },
  statusText: {
    fontSize: 25,
    marginBottom: 20,
    color: 'black',
  },
});

export default App;
