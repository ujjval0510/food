import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    terms: searchTerm,
                    location: 'san jose'
                }
            });
            setSearchResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('something went wrong');
        }
    };

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChanged={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={searchAPI} />

            <Text>Search Screen</Text>

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>we have found item :{results.length} results</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({});

export default SearchScreen;