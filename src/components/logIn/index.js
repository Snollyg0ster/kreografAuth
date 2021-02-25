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

  console.log('>>user', user);

  const dispatch = useDispatch();

  const logIn = (mail, pass) => {
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
        }),
      );
    }
    // auth()
    //   .signInWithEmailAndPassword(mail, pass)
    //   .then(() => {
    //     console.log('Вы успешно залогинились!');
    //     setError('');
    //     props.navigation.navigate('Goods', {name: 'Jane'});
    //   })
    //   .catch((error) => {
    //     if (error.code === 'auth/user-not-found') {
    //       setError('Такого пользователя не существует');
    //     }

    //     if (error.code === 'auth/wrong-password') {
    //       setError('Неправильный пароль!');
    //     }
    //     //console.error(error);
    //   });
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
        onSubmitEditing={() => logIn(email, password)}
        ref={textInput}
      />
      <Text style={styles.error}>{err}</Text>
    </>
  );
};

export default LogInInput;
