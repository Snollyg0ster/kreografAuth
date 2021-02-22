import React from 'react';
import {View} from 'react-native';
import styles from './styles/index';
import IconIon from 'react-native-vector-icons/Ionicons';

const Timer = () => {
  return (
    <>
      <View style={styles.navigationBar}>
        <IconIon name="time-outline" size={21} color="white" />
      </View>
    </>
  );
};

export default Timer;
