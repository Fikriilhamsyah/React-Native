import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 80, height: 80, backgroundColor: '#c9c9c9'}} />
        <Text>Muhammad</Text>
        <Text>Fikri</Text>
        <Text>Ilhamsyah</Text>
        <Fikri />
        <Photo />
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen />
        <Profile />
      </View>
    );
  };
  
  const Fikri = () => {
    return <Text>Muhammad Fikri Ilhamsyah</Text>;
  };
  
  const Photo = () => {
    return (
      <Image
        source={{uri: 'https://loremflickr.com/100/100'}}
        style={{width: 100, height: 100}}
      />
    );
  };
  
  class BoxGreen extends Component {
    render() {
      return <Text>Ini Component dari class</Text>;
    }
  }
  
  class Profile extends Component{
    render() {
      return (
        <View>
          <Image
            source={{uri: 'https://loremflickr.com/100/100'}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text style={{color: 'blue', fontSize: 24}}>Ini Photo</Text>
        </View>
      );
    }
  }

  export default SampleComponent;
  