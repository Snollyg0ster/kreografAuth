import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import TopPanel from '../../components/topPanel';
import styles from './styles';
import ExitButton from './../../components/exitButton/index';
import Timer from '../../components/timer';
import Good from './../../components/good/index';
import Info from '../../components/shopingInformation';
import {DATA} from './../../components/picker/index';
import NavTab from './../../components/navTab/index';

const Goods = ({navigation}) => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel
        name="Получатель"
        elements={<ExitButton navigation={navigation} />}
      />
      <View style={styles.inputContainer}>
        <Timer navigation={navigation} />
        <ScrollView style={styles.scrollview}>
          <Info />
        </ScrollView>
        <NavTab />
      </View>
    </View>
  );
};

export default Goods;
