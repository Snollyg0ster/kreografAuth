import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles/index';
import Icon from 'react-native-vector-icons/Fontisto';

export const DATA = [
  {
    id: '1',
    title: '700,00 ₽',
    number: '< 3 шт.',
  },
  {
    id: '2',
    title: '650,00 ₽',
    number: '4-10 шт.',
  },
  {
    id: '3',
    title: '600,00 ₽',
    number: '11-20 шт.',
  },
  {
    id: '4',
    title: '550,00 ₽',
    number: '21-30 шт.',
  },
];

const Item = (props) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.number}>{props.number}</Text>
  </TouchableOpacity>
);

const Picker = (props) => {
  const renderItem = ({item}) => (
    <Item title={item.title} number={item.number} />
  );

  return (
    <View style={styles.container}>
      <Icon
        name="caret-left"
        size={50}
        width={25}
        color="#e6e6e6"
        style={styles.carLeft}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Icon
        name="caret-right"
        size={50}
        color="#e6e6e6"
        style={styles.carRight}
      />
    </View>
  );
};

export default Picker;
