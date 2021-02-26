import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/index';
import IconIon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

const Timer = (props) => {
  const [serverTime, setserverTime] = useState();
  const [time, setTime] = useState();
  const timerRef = useRef(null);

  function getTimeDifference(value) {
    setTime(serverTime - Date.now());
  }

  function converter() {
    if (time) {
      const days = time / 86400000;
      const hours = (days - Math.trunc(days)) / 0.0416666666666667;
      const minutes = (hours - Math.trunc(hours)) / 0.0166666666666667;
      return (
        Math.trunc(days) +
        ' дня : ' +
        Math.trunc(hours) +
        ' часов : ' +
        Math.trunc(minutes) +
        ' минут'
      );
    } else return 'загрузка...';
  }

  async function getServerTime() {
    await database()
      .ref('countDown')
      .once('value')
      .then((snapshot) => {
        setserverTime(new Date(snapshot.val()));
        getTimeDifference(snapshot.val());
        converter(new Date(snapshot.val()) - Date.now());
      });
    return 0;
  }

  useEffect(() => {
    getServerTime();

    timerRef.current = setInterval(getTimeDifference, 5000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <View style={styles.navigationBar}>
      <IconIon name="time-outline" size={21} color="white" />
      <View style={styles.time}>
        <Text style={styles.text}>Осталось</Text>
        <Text style={styles.text}>{converter()}</Text>
      </View>
    </View>
  );
};

export default Timer;
