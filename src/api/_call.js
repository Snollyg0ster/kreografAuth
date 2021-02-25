import auth from '@react-native-firebase/auth';

export const authCall = async ({mail, pass}) => {
  try {
    const data = await auth().signInWithEmailAndPassword(mail, pass);

    console.log('Вы успешно залогинились!');
    return data;
  } catch (e) {
    console.warn('>>e', e.code);
    return e.code;
  }
};

// return
// .then((data) => {

//   //setError('');
//   //props.navigation.navigate('Goods', {name: 'Jane'});
// })
// .catch((error) => {
//   if (error.code === 'auth/user-not-found') {
//     //setError('Такого пользователя не существует');
//   }

//   if (error.code === 'auth/wrong-password') {
//     //setError('Неправильный пароль!');
//   }
//   //console.error(error);
// });
