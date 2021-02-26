import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/index';
import IconIon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

const Timer = (props) => {
  const [serverTime, setServerTime] = useState(null);
  const [time, setTime] = useState(null);
  const [convertedTime, setConvertedTime] = useState(null);

  const timerRef = useRef(null);

  const getTimeDifference = () => {
    if (serverTime) {
      setTime(serverTime - Date.now());
    }
  };

  const converter = () => {
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
    } else {
      return null;
    }
  };

  const getServerTime = async () => {
    await database()
      .ref('countDown')
      .once('value')
      .then((snapshot) => {
        setServerTime(new Date(snapshot.val()));
      });
  };

  useEffect(() => {
    getServerTime();
  }, []);

  useEffect(() => {
    setConvertedTime(converter());
  }, [time]);

  useEffect(() => {
    if (serverTime) {
      getTimeDifference();

      timerRef.current = setInterval(getTimeDifference, 5000);

      return () => {
        clearInterval(timerRef.current);
      };
    }
  }, [serverTime]);

  return (
    <View style={styles.navigationBar}>
      <IconIon name="time-outline" size={21} color="white" />
      <View style={styles.time}>
        <Text style={styles.text}>Осталось</Text>
        <Text style={styles.text}>{convertedTime || 'загрузка...'}</Text>
      </View>
    </View>
  );
};

export default Timer;
