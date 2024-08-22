import { StyleSheet } from 'react-native'

const burger_constant = {
    width: '80%',
    height: 6,
    backgroundColor: '#fff',
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  appBar: {
    width: '100%',
    height: 100,
    paddingTop: 30,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#543'
  },

  burger: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  first: {...burger_constant},

  mid: {
    ...burger_constant, 
    marginVertical: 5
  },

  last: {
    ...burger_constant,
  },

  appTitle: {
    flex: 1,
    height: 60,
    marginRight: 5,
    alignItems: 'center', 
  },

  title: {
    fontSize: 50,

  },

  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },

  under: {
    position: 'absolute',
    gap: 20,
    rowGap: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: 300,
    padding: 10,
    backgroundColor: 'black',
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    borderTopLeftRadius:50,
    borderTopRightRadius: 50
  },
  
  item: {
    width: '40%',
    height: 50,
    padding: 10,
    color: 'white',
    fontSize: 20,
    borderRadius: 50,
    backgroundColor: 'blue',
    textAlign: 'center',
  }
  
});


export default styles;