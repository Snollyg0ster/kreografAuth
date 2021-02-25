import React, {useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import {signupRequest} from '../../redux/auth/actions';
import {useDispatch} from 'react-redux';

const SignInInput = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState();
  const textInput = useRef(null);

  const dispatch = useDispatch();

  const signIn = (mail, pass) => {
    if (mail === '' || pass === '') {
      setError('Пожалуйста, заполните обе формы!');
    } else
      dispatch(
        signupRequest({
          mail,
          pass,
          callback: () => {
            setError('');
            props.navigation.navigate('Goods', {name: 'Jane'});
          },
          errorCallback: (e) => {
            setError(e);
          },
        }),
      );
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
