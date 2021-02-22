import React from 'react';
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
import {Image, View} from 'react-native';
=======
import {View} from 'react-native';
>>>>>>> navTab
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
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
          icon={
            <Image
              style={styles.image}
              source={require('../../img/home.png')}
            />
          }
=======
          icon={<IconSimple name="home" size={30} color="gray" />}
>>>>>>> navTab
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
          icon={
            <Image
              style={styles.image}
              source={require('../../img/file.png')}
            />
          }
=======
          icon={<IconAnt name="filetext1" size={30} color="gray" />}
>>>>>>> navTab
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
          icon={
            <Image
              style={styles.image}
              source={require('../../img/message.png')}
            />
          }
=======
          icon={<IconAnt name="message1" size={30} color="gray" />}
>>>>>>> navTab
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
          icon={
            <Image
              style={styles.image}
              source={require('../../img/market.png')}
            />
          }
=======
          icon={<IconAnt name="shoppingcart" size={32} color="gray" />}
>>>>>>> navTab
          type="clear"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
<<<<<<< 90c90ae0554f775aa71d76bbb8b04912789a1cc7
          icon={
            <Image
              style={styles.image}
              source={require('../../img/user.png')}
            />
          }
=======
          icon={<IconSimple name="user" size={30} color="gray" />}
>>>>>>> navTab
          type="clear"
        />
      </View>
    </>
  );
};

export default NavTab;
