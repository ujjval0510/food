import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async id => {

        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>Result show screen</Text>

            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}></Image>

                }}

            ></FlatList >
        </View >
    );
};


const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200
    }
});


export default ResultShowScreen;
