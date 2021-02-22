import React from 'react';
import {View} from 'react-native';
import TopPanel from '../../components/topPanel';
import styles from './styles';
import ExitButton from './../../components/exitButton/index';
import Timer from '../../components/timer';
import Good from './../../components/good/index';
import Info from '../../components/shopingInformation';
import {DATA} from './../../components/picker/index';
import NavTab from './../../components/navTab/index';

const info = {
  title: 'Подсвечник на 3 свечи бронза 25 см',
  cost: '724,50 ₽',
  discounts: DATA,
  needToBuy: 100,
  bought: 300,
  artCode: 668093,
};

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
        <Info {...info} />
        <NavTab />
      </View>
    </View>
  );
};

export default Goods;
