import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles/index';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

const NavTab = () => {
  return (
    <>
      <View style={styles.navigationBar}>
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Image
              style={styles.image}
              source={require('../../img/home.png')}
            />
          }
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Image
              style={styles.image}
              source={require('../../img/file.png')}
            />
          }
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Image
              style={styles.image}
              source={require('../../img/message.png')}
            />
          }
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Image
              style={styles.image}
              source={require('../../img/market.png')}
            />
          }
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={
            <Image
              style={styles.image}
              source={require('../../img/user.png')}
            />
          }
          type="clear"
        />
      </View>
    </>
  );
};

export default NavTab;
