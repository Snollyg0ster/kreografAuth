import React from 'react';
import {View} from 'react-native';
import TopPanel from '../../components/topPanel';
import InputType from '../../components/inputType';
import styles from './styles';

const Authorization = ({navigation}) => {
  return (
    <View style={styles.signInScreen}>
      <TopPanel />
      <View style={styles.inputContainer}>
        <InputType navigation={navigation} />
      </View>
    </View>
  );
};

export default Authorization;
