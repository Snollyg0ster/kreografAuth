import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/index';
import IconIon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

const Timer = (props) => {
  const [serverTime, setserverTime] = useState();
  const [time, setTime] = useState();

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

  function getTimeDifference(value) {
    setTime(serverTime - Date.now());
  }

  function timer() {
    setInterval(getTimeDifference, 5000);
  }

  timer();

  function converter() {
    if (time) {
      let days = time / 86400000;
      let hours = (days - Math.trunc(days)) / 0.0416666666666667;
      let minutes = (hours - Math.trunc(hours)) / 0.0166666666666667;
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

  useEffect(() => {
    getServerTime();
  }, [serverTime]);

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
