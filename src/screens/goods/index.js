import React from 'react';
import {View} from 'react-native';
import AuthenticationState from '../../components/authorization';
import TopPanel from '../../components/topPanel';
import styles from './styles';
import ExitButton from './../../components/exitButton/index';
import Timer from '../../components/timer';
import Good from './../../components/good/index';
import Info from '../../components/shopingInformation';

const Goods = ({navigation}) => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel
        name="Получатель"
        elements={<ExitButton navigation={navigation} />}
      />
      <View style={styles.inputContainer}>
        <Timer />
        <Good />
        <Info />
      </View>
    </View>
  );
};

export default Goods;
