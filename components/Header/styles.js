import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  logo: {
    width: 90,
    height: 25,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    resizeMode: 'contain',
    height: 25,
  },
});

export default styles;
