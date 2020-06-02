import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList'

const SearchScreen = () => {

    const [term, setSearchTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>

            <SearchBar
                searchTerm={term}
                onSearchTermChanged={setSearchTerm}
                onTermSubmit={() => searchAPI(term)} />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>

                <ResultList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                    // navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                    // navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                    // navigation={navigation}
                />

            </ScrollView>

        </View>

    );
}


const styles = StyleSheet.create({});

export default SearchScreen;