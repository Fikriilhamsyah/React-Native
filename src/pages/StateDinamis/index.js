import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Component dinamis dengan state menggunakan Functional Component
const CounterFunction = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text>{number}</Text>
            <Button title='Tambah' onPress={() => setNumber(number + 1)} />
        </View>
    );
};

// Component dinamis dengan state menggunakan Class Component
class CounterClass extends Component {
    state = {
        number: 0,
    }
    render(){
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button title='Tambah' onPress={() => this.setState({number: this.state.number + 1})} />
            </View>
        );
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Materi Component Dinamis dengan State</Text>
            <View style={{marginVertical: 20}}>
                <Text>State dengan Functional Component</Text>
                <CounterFunction />
            </View>
            <View style={{marginVertical: 20}}>
                <Text>State dengan Class Component</Text>
                <CounterClass />
            </View>
        </View>
    );
};

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
        color: 'black'
    },
});