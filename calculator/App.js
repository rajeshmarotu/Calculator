import React, { Component } from 'react';
import {TouchableHighlight,Text, View} from 'react-native';



import styles from './styles/styles.js';
//import Calculator from './components/Calculator';
import Digit from './components/digits.js';
import Op from './components/operations.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:"",
    }
    //Text.defaultProps.allowFontScaling=false;
  }
  holdButton(){
    this.setState({ data:"",instantvalue:""});
  }
 onpress(val) {
   switch(val){
     case 1:
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
     case 0:
            var expression=this.state.data.concat(val);
            var instaval=eval(expression);
            this.setState({ data:expression,instantvalue:instaval});
            break;
     case '+':
     case '-':
     case '*':
     case '/':
     case '.':
            //var joined = this.state.myArray.concat(val);
            /*var l=this.state.data.length;
            this.state.data.splice(l, 0, val);*/
            expression=this.state.data.concat(val);
            this.setState({ data:expression,instantvalue:""});
            break;
     case 'DEL':
              /*var r=this.state.data.length;
              this.state.data.splice(r-1,1);*/
              var subexp;
              if(typeof this.state.data == "string"){
                var l=this.state.data.length;
                subexp=this.state.data.substring(0,l-1);
                
              }
              else{
                subexp=""
              }
              this.setState({ 
                 data:subexp
              });
              break;
     case '=':
             /*var dataarray=this.state.data;
              var exp=""
              for(var i=0;i<dataarray.length;i++){
                exp=exp+dataarray[i]
              }*/
              var value=eval(this.state.data);
              this.setState({
                data:"",
                instantvalue:value
              })
              break;
     }
     
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.values}>
                <Text style={{fontSize:30}}>
                    {this.state.data}
                </Text>
                <Text style={{fontSize:25}}>
                  {this.state.instantvalue}
                </Text>
        </View>
        <View style={styles.board}>
            <View style={styles.digitssection}>
              <TouchableHighlight onPress={this.onpress.bind(this,7)} >
                  <Digit value="7" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,4)}>
                  <Digit value="4" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,1)}>
                  <Digit value="1" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this, '.')}>
                  <Digit value="." style={styles.digit}/>
              </TouchableHighlight>
                

            </View>
            <View style={styles.digitssection}>
                <TouchableHighlight onPress={this.onpress.bind(this,8)}>
                  <Digit value="8" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,5)}>
                  <Digit value="5" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,2)}>
                  <Digit value="2" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this, 0)}>
                  <Digit value="0" style={styles.digit}/>
              </TouchableHighlight>
            </View>
            <View style={styles.digitssection}>
                <TouchableHighlight onPress={this.onpress.bind(this,9)}>
                  <Digit value="9" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,6)}>
                  <Digit value="6" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this,3)}>
                  <Digit value="3" style={styles.digit}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onpress.bind(this, '=')}>
                  <Digit value="=" style={styles.digit}/>
              </TouchableHighlight>
            </View>
             <View style={styles.opssection}>
                 <TouchableHighlight onPress={this.onpress.bind(this,'DEL')} onLongPress={this.holdButton.bind(this)} style={styles.op}>
                     <Op value="DEL" style={styles.op}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.onpress.bind(this,'/')}  style={styles.op}>
                      <Op value="/" style={styles.op}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.onpress.bind(this,'*')}  style={styles.op}>
                      <Op value="*" style={styles.op}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.onpress.bind(this, '-')}  style={styles.op}>
                      <Op value="-" style={styles.op}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.onpress.bind(this, '+')}  style={styles.op}>
                      <Op value="+" style={styles.op}/>
                  </TouchableHighlight>
                 
                
                 
                 
            </View>
             <View style={styles.scifisection}>
                
            </View>
        </View>
        
      </View>
      
    );
  }
}
