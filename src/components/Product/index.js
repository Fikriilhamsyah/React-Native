import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import photo from '../../assets/image/img-1.png';

const Product = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={photo} style={styles.imageProduct} />
            <Text style={styles.productName}>New Macbook Pro 2019</Text>
            <Text style={styles.productPrice}>Rp. 25.000.000</Text>
            <Text style={styles.location}>Jakarta Barat</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>BELI</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginLeft: 20,
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8,
    },
    imageProduct: {
        width: 188,
        height: 107,
        borderRadius: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 12,
    },
    productPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F2994A',
        marginTop: 12,
    },
    location: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 12,
    },
    button: {
        backgroundColor: '#6FCF97',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});