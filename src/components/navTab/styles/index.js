import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navigationBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerStyle: {
    borderRadius: 20,
  },
  titleStyle: {
    color: 'gray',
  },
  image: {
    width: 34,
    height: 32,
  },
});

export default styles;
