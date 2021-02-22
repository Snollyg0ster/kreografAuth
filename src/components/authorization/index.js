import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import {Text, View} from 'react-native';

const AuthenticationState = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  function userEmail() {
    if (typeof user.email === 'object') return 'anon user';
    else return user.email;
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line
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
      <Text style={styles.statusText}>{userEmail()}</Text>
    </View>
  );
};

export default AuthenticationState;
