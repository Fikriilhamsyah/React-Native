import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Story = (props) => {
    return(
        <View>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
                <Image
                    source={{
                        uri: props.gambar,
                    }}
                    style={{width: 70, height: 70, borderRadius: 50}}
                />
                <Text style={{maxWidth: 60, textAlign: 'center', fontSize: 14, color: 'black', marginTop: 5}}>{props.judul}</Text>
            </View>
        </View>
    );
}

const PropsDinamis = () => {
    return(
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
                <View style={{marginTop: 40, flexDirection: 'row'}}>
                    <Story judul='Muhammad' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/397055575_841234494207977_8291709861593967889_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hmWL-r4uvsgAX_jVoZb&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzE0MTc5NjM1Ng%3D%3D.2-ccb7-5&oh=00_AfD8_TtNOehZedn4Rrevedir05ySH3M6CB_M_g48szWpIw&oe=654F68B8&_nc_sid=ee9879' />
                    <Story judul='Fikri' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/398229995_24904873639111944_8219191775849762286_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KOx_lV3q7ZsAX94L7y5&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzE0MTkxNDk5MA%3D%3D.2-ccb7-5&oh=00_AfAT0It7nwxCrOWr3rnN6OV3oZotmi0FHSw21M61gASPIw&oe=65508901&_nc_sid=ee9879' />
                    <Story judul='Ilhamsyah' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/396690067_893454935630183_1167026699730363665_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9-P11RNrkRQAX-P1Fvk&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzM1MTUwNTQzMw%3D%3D.2-ccb7-5&oh=00_AfDCJQAPStQku3PVTprAUpjWJ-m74Wz2wi7EzrfE5-8nCA&oe=654FC3F8&_nc_sid=ee9879' />
                    <Story judul='Muhammad' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/397055575_841234494207977_8291709861593967889_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hmWL-r4uvsgAX_jVoZb&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzE0MTc5NjM1Ng%3D%3D.2-ccb7-5&oh=00_AfD8_TtNOehZedn4Rrevedir05ySH3M6CB_M_g48szWpIw&oe=654F68B8&_nc_sid=ee9879' />
                    <Story judul='Fikri' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/398229995_24904873639111944_8219191775849762286_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KOx_lV3q7ZsAX94L7y5&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzE0MTkxNDk5MA%3D%3D.2-ccb7-5&oh=00_AfAT0It7nwxCrOWr3rnN6OV3oZotmi0FHSw21M61gASPIw&oe=65508901&_nc_sid=ee9879' />
                    <Story judul='Ilhamsyah' gambar='https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-15/396690067_893454935630183_1167026699730363665_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9-P11RNrkRQAX-P1Fvk&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNTAwODkxMzM1MTUwNTQzMw%3D%3D.2-ccb7-5&oh=00_AfDCJQAPStQku3PVTprAUpjWJ-m74Wz2wi7EzrfE5-8nCA&oe=654FC3F8&_nc_sid=ee9879' />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({});