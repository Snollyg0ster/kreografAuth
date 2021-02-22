import React from 'react';
import {View} from 'react-native';
import AuthenticationState from '../../components/authorization';
import TopPanel from '../../components/topPanel';
import styles from './styles';
import ExitButton from './../../components/exitButton/index';
import Timer from '../../components/timer';

const Goods = ({navigation}) => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel
        name="Получатель"
        elements={<ExitButton navigation={navigation} />}
      />
      <View style={styles.inputContainer}>
        <Timer />
      </View>
    </View>
  );
};

export default Goods;
