import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {
    // Tipe data primitif
    const nama = 'Fikri'; // String
    const umur = 21; // Number
    const apakahLakiLaki = true; // boolean

    // Tipe data complex
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'kucing'
    } // Object

    const jenisKelamin = ['laki-laki', 'perempuan']; // array --> dalam javascript ini tetap disebut object, tapi dalam istilah biasanya dalam bahasa pemrograman lain ini desbut array
    const namaOrang = ['Muhammad', 'Fikri', 'Ilhamsyah'];

    // if(hewanPeliharaan.nama === 'Miaw'){
    //     console.log('Ini adalah kucing');
    // }else{
    //     console.log('Ini bukan kucing');
    // } // if conditional

    const sapaHewan = (objectHewan) => {
        // let hasilSapa = '';
        // if(objectHewan.nama === 'Miaw'){
        //     hasilSapa = 'Ini adalah kucing';
        // }else{
        //     hasilSapa = 'Ini adalah bukan kucing';
        // }
        // return hasilSapa;

        return objectHewan.nama === 'Miaw' ? 'Ini adalah kucing' : 'Ini adalah bukan kucing'; // if conditional dengan ternary operator
    } // function --> arrow function

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic Javascript di React Native</Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>
            {namaOrang.map((orang => 
                <Text>{orang}</Text>
            ))}
        </View>
    );
};

export default BasicJavascript;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
});