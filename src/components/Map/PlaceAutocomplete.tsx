import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';

import { GooglePlacesQuery } from '../../core/enums/Api';
import { SELECT_PLACE } from '../../redux/actions';
import MapMarkerView from './MapMarkerView';
import SearchHistory from './SearchHistory';
import { State } from '../../redux/reducers';
import { UIEnum } from '../../core/enums/UIEnum';

const PlaceAutocomplete = () => {
    const dispatch = useDispatch();

    const handlePlaceSelect = (place: any) => {
        dispatch({ type: SELECT_PLACE, payload: place });
    };

    const error = useSelector((state: State) => state.error);

    return (
        <SafeAreaView style={styles.container}>
            <MapMarkerView />
            <View style={styles.autocompleteContainer}>
                <GooglePlacesAutocomplete
                    placeholder={UIEnum.SearchHint}
                    onPress={(_, details = null) => {
                        handlePlaceSelect(details);
                    }}
                    autoFillOnNotFound={true}
                    fetchDetails={true}
                    query={{
                        key: GooglePlacesQuery.API_KEY,
                        language: GooglePlacesQuery.LANGUAGE,
                    }}
                    styles={{
                        container: styles.searchContainer,
                        textInputContainer: styles.textInputContainer,
                        textInput: styles.textInput,
                        listView: styles.listView,
                        description: styles.description,
                    }}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}

            <SearchHistory />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    mapContainer: {
        flex: 1,
        position: 'relative',
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
    },
    textInputContainer: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    textInput: {
        height: 50,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 15,
    },
    listView: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
    },
    description: {
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default PlaceAutocomplete;
