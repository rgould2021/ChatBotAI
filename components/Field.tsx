import React from 'react';
import {TextInput} from 'react-native';
//import {color1} from './Constants';

 

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 5,color: 'black', fontWeight: 'bold', justifyContent: 'center', paddingHorizontal: 20, width: '80%', height: 50, backgroundColor: 'white', marginVertical: 10}}
      placeholderTextColor= "#003f5c"></TextInput>
  );
};

export default Field;