import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  borders: {
    height: 228,
    width: '100%',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#e6e6e6',
  },
  cont: {
    marginHorizontal: 19,
  },
  titleCont: {
    width: '100%',
  },
  title: {
    margin: 12,
    marginLeft: 0,
    fontSize: 18,
  },
  price: {
    marginTop: 11,
    fontSize: 23,
  },
  buyOptions: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#8dc53e',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: '#8dc53e',
  },
  buyOptions2: {
    marginTop: 24,
    marginRight: 19,
    marginBottom: 9,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  grayText: {
    fontSize: 15,
    color: '#aaa',
  },
  blackText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
