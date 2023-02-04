import {StyleSheet} from 'react-native';
import { Colors} from '../../theme/Colors';

export default StyleSheet.create({
  container:{ zIndex: 10 ,marginRight:10},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    zIndex: 2,
    justifyContent: 'space-between',
    borderRadius:5,
    paddingHorizontal:10,
    width:120
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    color: Colors.black,
  },
  dropdown: {
    height: "50%",
    shadowColor:Colors.black,
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    elevation: 10,
  },
  item: {
    flexGrow: 1,
    position: 'relative',
    color: '#8f92a1',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.7,
    borderColor: Colors.lightBlue,
    flexDirection:'row'
  },
  overlay: {
    flex: 1,
  },
  countryFlag:{
    width:20,
    height:20,
    borderRadius:10,
    marginHorizontal:5
  }
});
