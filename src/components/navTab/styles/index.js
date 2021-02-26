import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navigationBar: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  containerStyle: {
    borderRadius: 20,
  },
  titleStyle: {
    color: 'gray',
  },
});

export default styles;
