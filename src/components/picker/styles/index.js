import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 290,
    minHeight: 55,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    padding: 5,
    height: 50,
    width: 100,
    marginHorizontal: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
  number: {
    color: 'gray',
    fontSize: 15,
  },
  carLeft: {
    marginLeft: -20,
    marginRight: -6,
  },
  carRight: {
    marginLeft: -6,
  },
});

export default styles;
