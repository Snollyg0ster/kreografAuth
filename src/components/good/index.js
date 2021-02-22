import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles/index';

const Good = () => {
  return (
    <>
      <View style={styles.good}>
        <Image
          style={styles.image}
          source={require('../../img/candlestick.png')}
        />
      </View>
    </>
  );
};

export default Good;
