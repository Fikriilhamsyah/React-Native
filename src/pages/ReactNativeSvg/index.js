import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import IlustrationMyApp from '../../assets/image/svg-1.svg';

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Menggunakan File SVG didalam React Native</Text>
            <IlustrationMyApp width={244} height={125} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
});

export default ReactNativeSvg;