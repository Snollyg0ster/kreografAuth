import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import styles from './styles/index';

const TopPanel = (props) => {
  return (
    <>
      <StatusBar backgroundColor="#ff3200" />
      <View style={styles.navigationBar}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      {props.elements}
    </>
  );
};

export default TopPanel;
