import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ searchTerm, onSearchTermChanged, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>

            <Feather name="search" style={styles.iconStyle} />

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={searchTerm}
                onChangeText={newTerm => onSearchTermChanged(newTerm)}
                onEndEditing={onTermSubmit}
            />

        </View>);
}


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        padding: 3,
        borderRadius: 5
    },

    inputStyle: {
        flex: 1,
        fontSize: 18
    },

    iconStyle: {
        alignSelf: 'center',
        fontSize: 30,
        marginHorizontal: 15
    }

});


export default SearchBar; 