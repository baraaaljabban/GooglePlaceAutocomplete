import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const MapMarkerView = () => {
    const selectedPlace = useSelector((state: State) => state.selectedPlace);

    return (

        <View style={styles.mapContainer}>
            {selectedPlace && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: selectedPlace.geometry.location.lat,
                        longitude: selectedPlace.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: selectedPlace.geometry.location.lat,
                            longitude: selectedPlace.geometry.location.lng,
                        }}
                        title={selectedPlace.name}
                        tracksInfoWindowChanges={true}
                    />
                </MapView>
            )}
        </View>
    )
};

const styles = StyleSheet.create({

    mapContainer: {
        flex: 1,
        position: 'relative',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

});

export default MapMarkerView;