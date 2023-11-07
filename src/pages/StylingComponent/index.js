import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import photo from '../../assets/image/img-1.png';

const StylingComponent = () => {
    return (
      <View style={{marginVertical: 60}}>
        <Text style={styles.text}>Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderWidth: 2,
            borderColor: '#c9c9c9',
            marginTop: 20,
            marginLeft: 20,
          }}
          />
          <View style={{marginTop: 20, marginLeft: 20, padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
            <Image source={photo} style={{width: 188, height: 107, borderRadius: 8}} />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12}}>New Macbook Pro 2019</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 12}}>Rp. 25.000.000</Text>
            <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
            <View style={{backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>BELI</Text>
            </View>
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginLeft: 20,
      marginTop: 40,
    },
  });

  export default StylingComponent;