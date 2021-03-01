import firestore from '@react-native-firebase/firestore';

const getGoods = async () => {
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

export default getGoods;
