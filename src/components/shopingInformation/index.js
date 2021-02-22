import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/index';
import Picker from './../picker/index';
import Icon from 'react-native-vector-icons/Fontisto';
import {Button} from 'react-native-elements';

const Info = (props) => {
  return (
    <View style={styles.borders}>
      <View style={styles.cont}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.buyOptions}>
          <View>
            <Text style={styles.price}>{props.cost}</Text>
            <Picker items={props.discounts} />
          </View>
          <Button
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.containerStyle}
            titleStyle={styles.titleStyle}
            icon={<Icon name="shopping-basket-add" size={30} color="#8dc53e" />}
          />
        </View>
        <View style={styles.buyOptions2}>
          <View style={styles.buyOptions}>
            <Text style={styles.grayText}>Надо выкупить: </Text>
            <Text style={styles.blackText}>{props.needToBuy}</Text>
          </View>
          <View style={styles.buyOptions}>
            <Text style={styles.grayText}>Выкуплено: </Text>
            <Text style={styles.blackText}>{props.bought}</Text>
          </View>
        </View>
        <Text style={styles.grayText}>Арт./код: {props.artCode}</Text>
      </View>
    </View>
  );
};

export default Info;
