import React from 'react';
import {View} from 'react-native';
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
          icon={<IconSimple name="home" size={30} color="gray" />}
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={<IconAnt name="filetext1" size={30} color="gray" />}
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={<IconAnt name="message1" size={30} color="gray" />}
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={<IconAnt name="shoppingcart" size={32} color="gray" />}
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          icon={<IconSimple name="user" size={30} color="gray" />}
          type="clear"
        />
      </View>
    </>
  );
};

export default NavTab;
