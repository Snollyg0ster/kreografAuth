import React from 'react';
import {View} from 'react-native';
import AuthenticationState from '../../components/authorization';
import TopPanel from '../../components/topPanel';
import styles from './styles';

const Goods = () => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel />
      <View style={styles.inputContainer}>
        <AuthenticationState />
      </View>
    </View>
  );
};

export default Goods;
