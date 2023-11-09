import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Cart from '../../assets/icon/img-2.png';

export default function Position() {
  return (
    <View style={styles.wrapper}>
        <Text style={{marginBottom: 40, fontSize: 18, fontWeight: '700'}}>Materi Position</Text>
        <View style={styles.cartWrapper}>
          <Image source={Cart} style={styles.iconCart} />
          <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center',
        marginVertical: 60
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    iconCart: {
        width: 50,
        height: 50
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})