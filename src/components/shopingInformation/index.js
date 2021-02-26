import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles/index';
import Picker from './../picker/index';
import Icon from 'react-native-vector-icons/Fontisto';
import {Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import Good from '../good';
import {useDispatch, useSelector} from 'react-redux';
import {dataRequest} from '../../redux/auth/actions';

// const Default = {
//   artCode: null,
//   bought: null,
//   cost: '-',
//   discounts: [
//     {id: '1', number: '-', title: '-'},
//     {id: '2', number: '-', title: '-'},
//     {id: '3', number: '-', title: '-'},
//     {id: '4', number: '-', title: '-'},
//   ],
//   needToBuy: null,
//   title: '-',
//   img: '-',
// };

const Info = () => {
  //const [info, setInfo] = useState(Default);

  const info = useSelector((state) => state.goodsReducer);

  const dispatch = useDispatch();

  // const goodsCall = async () => {
  //   const Info = await firestore()
  //     .collection('goods')
  //     .doc('dCm03ZweBmb7z7VSlRrq')
  //     .get();
  //   console.log(Info._data);
  //   setInfo(Info._data);
  // };

  useEffect(() => {
    //goodsCall();
    dispatch(dataRequest());
  }, []);

  return (
    <>
      <Good img={info.img} />
      <View style={styles.borders}>
        <View style={styles.cont}>
          <View style={styles.titleCont}>
            <Text style={styles.title}>{info.title}</Text>
          </View>
          <View style={styles.buyOptions}>
            <View>
              <Text style={styles.price}>{info.cost}</Text>
              <Picker items={info.discounts} />
            </View>
            <Button
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.containerStyle}
              titleStyle={styles.titleStyle}
              icon={
                <Icon name="shopping-basket-add" size={30} color="#8dc53e" />
              }
            />
          </View>
          <View style={styles.buyOptions2}>
            <View style={styles.buyOptions}>
              <Text style={styles.grayText}>Надо выкупить: </Text>
              <Text style={styles.blackText}>{info.needToBuy}</Text>
            </View>
            <View style={styles.buyOptions}>
              <Text style={styles.grayText}>Выкуплено: </Text>
              <Text style={styles.blackText}>{info.bought}</Text>
            </View>
          </View>
          <Text style={styles.grayText}>Арт./код: {info.artCode}</Text>
        </View>
      </View>
    </>
  );
};

export default Info;
