import React, {useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const SignInInput = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState();
  const textInput = useRef(null);

  const signIn = (mail, pass) => {
    if (mail === '' || pass === '') {
      setError('Пожалуйста, заполните обе формы!');
    } else
      auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then(() => {
          console.log('Вы успешно зарегистрировались и вошли в аккаунт!');
          setError('');
          props.navigation.navigate('Goods', {name: 'Jane'});
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setError('Эта электронная почта уже используется!');
          }

          if (error.code === 'auth/invalid-email') {
            setError('Неправильный адрес электронной почты!');
          }
          //console.error(error);
        });
  };

  return (
    <>
      <TextInput
        style={styles.loginOrPassword}
        placeholder="электронная почта"
        onChangeText={(mail) => setEmail(mail)}
        onSubmitEditing={() => textInput.current.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.loginOrPassword}
        placeholder="пароль"
        onChangeText={(pass) => setPassword(pass)}
        onSubmitEditing={() => signIn(email, password)}
        ref={textInput}
      />
      <Text style={styles.error}>{err}</Text>
    </>
  );
};

export default SignInInput;
