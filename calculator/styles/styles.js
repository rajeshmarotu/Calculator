import {StyleSheet} from 'react-native';
import {Constants} from 'expo';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  values:{
    flex:0.3,
    backgroundColor:'orange',
  },
  board:{
    flex:0.7,
     backgroundColor:'#ddd',
     flexDirection:'row',
  },
  digitssection:{
    flex:0.25,
    backgroundColor:'blue',
    flexDirection:'column',
  },
  opssection:{
     flex:0.25,
     backgroundColor:'gray',
     flexDirection:'column',
  },
  scifisection:{
    flex:0.1,
    backgroundColor:'yellow'
  },
digit:{
  flex:0.25,
  backgroundColor:'#fff',
  padding:30,

},
op:{
  flex:0.20,
  fontSize:18,
   paddingTop:5,
   paddingLeft:20,
}
  
});
export default  styles;
