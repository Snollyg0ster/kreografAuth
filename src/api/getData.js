import firestore from '@react-native-firebase/firestore';

export const getGoods = async () => {
  console.log('>>getGoods starts');

  try {
    const Info = await firestore()
      .collection('goods')
      .doc('dCm03ZweBmb7z7VSlRrq')
      .get();
    console.log('Данные получены!');
    return Info._data;
  } catch (e) {
    console.warn('>>e', e.code);
    return e.code;
  }
};
