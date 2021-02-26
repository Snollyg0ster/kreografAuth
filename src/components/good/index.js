import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles/index';

const Good = (props) => {
  return (
    <>
      <View style={styles.good}>
        <Image style={styles.image} source={{uri: props.img}} />
      </View>
    </>
  );
};

export default Good;
