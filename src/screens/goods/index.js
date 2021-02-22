import React from 'react';
import {View} from 'react-native';
import AuthenticationState from '../../components/authorization';
import TopPanel from '../../components/topPanel';
import styles from './styles';
import ExitButton from './../../components/exitButton/index';

const Goods = ({navigation}) => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel
        name="Получатель"
        elements={<ExitButton navigation={navigation} />}
      />
      <View style={styles.inputContainer}>
        <AuthenticationState />
      </View>
    </View>
  );
};

export default Goods;
