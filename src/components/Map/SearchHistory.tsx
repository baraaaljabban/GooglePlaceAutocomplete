import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';

const SearchHistory: React.FC = () => {
    const searchHistory = useSelector((state: State) => state.searchHistory);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Search History</Text>
            {searchHistory.map((search: string, index: number) => (
                <View key={index} style={styles.historyItem}>
                    <Text style={styles.historyText}>{search}</Text>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historyItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 3,
    },
    historyText: {
        fontSize: 16,
    },
});

export default SearchHistory;
