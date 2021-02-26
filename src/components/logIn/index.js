import React, {useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {loginRequest} from '../../redux/auth/actions';

const LogInInput = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState();
  const textInput = useRef(null);

  const {user} = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  const login = (mail, pass) => {
    if (email === '' || password === '') {
      setError('Пожалуйста, заполните обе формы!');
    } else {
      dispatch(
        loginRequest({
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
    }
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
        onSubmitEditing={() => login(email, password)}
        ref={textInput}
      />
      <Text style={styles.error}>{err}</Text>
    </>
  );
};

export default LogInInput;
