import React from 'react';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const signInAnon = () => {
  auth()
    .signInAnonymously()
    .then(() => {
      console.log('Пользователь зашёл анонимно');
    });
};

const Anon = (props) => {
  return (
    <>
      <Button
        onPress={() => {
          signInAnon();
          props.navigation.navigate('Goods', {name: 'Jane'});
        }}
        title="Войти позже"
        type="clear"
      />
    </>
  );
};

export default Anon;
