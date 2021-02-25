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

export const signupCall = async ({mail, pass}) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(mail, pass);

    console.log('Вы успешно зарегистрировались и вошли в аккаунт!');
    return data;
  } catch (e) {
    console.warn('>>e', e.code);
    return e.code;
  }
};
