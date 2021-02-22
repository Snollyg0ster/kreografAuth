import React from 'react';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const ExitButton = (props) => {
  function exit() {
    auth()
      .signOut()
      .then(() => console.log('Пользователь вышел!'));
    props.navigation.navigate('Authorization', {name: 'Jane'});
  }

  return (
    <>
      <Button
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        icon={<IconAntDesign name="leftcircleo" size={18} color="white" />}
        onPress={() => exit()}
      />
    </>
  );
};

export default ExitButton;
