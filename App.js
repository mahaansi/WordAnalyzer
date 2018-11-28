import React from 'react';
import { StyleSheet, Text, TextInput, View , Button } from 'react-native';


/**
 * Developed By:
 * Maha Abdulmalek 1322200
 * Rama Ashor 1415615 
 */
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      word : "",
      vowlesCount : 0
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          Enter a word :
        </Text>
        <TextInput
          style={{height: 40, width:'100%' , borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (w) => { 
              this.setState({word:w , vowlesCount : 0}); 
              let chars = w.split('');
              for (let i =0 ; i < chars.length ; i++ ) {
                let char = chars[i].toLowerCase();
                
                if(char == 'a' || char == 'e' || char == 'i' || char == 'o' ||char == 'u'){
                  let vowles = this.state.vowlesCount;
                  this.setState({
                    vowlesCount : vowles + 1
                  })
                }
              }
           } }
        />

        <Text>
          Number of Consonants { this.state.word.length - this.state.vowlesCount }
        </Text>
        <Text>
          Number of Vowels { this.state.vowlesCount }
        </Text>
        <Text>
          Number of Characters { this.state.word.length }
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor:'#f4f4f4'
  }
});
