import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    paddingVertical: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
  },
});
