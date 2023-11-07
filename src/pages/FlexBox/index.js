import { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Photo from '../../assets/image/img-1.png';

class FlexBox extends Component {
    constructor (props) {
        super(props);
        console.log('==> constructor');
        this.state = {
            subscriber : 200,
        }
    }

    componentDidMount() {
        console.log('==> component did mount');
        setTimeout(() => {
            this.setState({
                subscriber: 400,
            });
        }, 2000);
    }

    componentDidUpdate() {
        console.log('==> component did update');
    }

    componentWillUnmount() {
        console.log('==> component will unmount');
    }

    render (){
        console.log('==> render');
        return (
            <View style={{marginVertical: 60}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#C8D6E5'}}>
                    {/* <Text>Materi Flex Box</Text> */}
                    <View style={{backgroundColor: '#EE5253', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#FECA57', width: 50, height: 100}}></View>
                    <View style={{backgroundColor: '#1DD1A1', width: 50, height: 150}}></View>
                    <View style={{backgroundColor: '#5F27CD', width: 50, height: 200}}></View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                    <Text>Satu</Text>
                    <Text>Dua</Text>
                    <Text>Tiga</Text>
                    <Text>Empat</Text>
                    <Text>Lima</Text>
                    <Text>Enam</Text>
                </View>
                <View style={{marginTop: 20, marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={Photo} style={{width: 60, height: 60, borderRadius: 50}} />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>Muhammad Fikri Ilhamsyah</Text>
                        <Text>{this.state.subscriber} ribu subscriber</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FlexBox;