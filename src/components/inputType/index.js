import React, {useState} from 'react';
import {ButtonGroup} from 'react-native-elements';
import SignInInput from './../signIn/index';
import styles from './styles';
import LogInInput from './../logIn/index';
import Anon from '../anonymous';

const InputType = (props) => {
  const [type, setType] = useState(0);

  const buttons = ['Войти', 'Регистрация'];

  const input = () => {
    if (type === 0) {
      return (
        <>
          <LogInInput navigation={props.navigation} />
        </>
      );
    } else {
      return (
        <>
          <SignInInput navigation={props.navigation} />
        </>
      );
    }
  };

  return (
    <>
      <ButtonGroup
        onPress={(e) => setType(e)}
        selectedIndex={type}
        buttons={buttons}
        containerStyle={styles.containerStyle}
        selectedButtonStyle={styles.selectedButtonStyle}
        buttonStyle={styles.buttonStyle}
        innerBorderStyle={styles.innerBorderStyle}
        buttonContainerStyle={styles.buttonContainerStyle}
      />
      {input()}
      <Anon navigation={props.navigation} />
      {/* <AuthenticationState /> */}
    </>
  );
};

export default InputType;
