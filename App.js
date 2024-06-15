import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function App() {

    const [mapLat] = useState(52.06);
    const [mapLong] = useState(4.29);

    const initialRegion = {
        latitude: mapLat,
        longitude: mapLong,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const dummyPoints = [
        {id: 1, latitude: 52.061776681, longitude: 4.299319},
        {id: 2, latitude: 52.06076664, longitude: 4.291323},
        {id: 3, latitude: 52.07078664, longitude: 4.293023},
    ];

    const onMarkerPress = (event) => {
        console.log(event.nativeEvent, "nativeEvent onMarkerPress")
    };

    const onMapPress = (event) => {
        console.log(event.nativeEvent, "nativeEvent onMapPress")
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                tintColor={'#643b9f'}
                initialRegion={initialRegion}
                onPress={onMapPress}
            >
                {dummyPoints.map((point, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: point.latitude,
                            longitude: point.longitude,
                        }}
                        id={'1' + index}
                        anchor={{x: 0.5, y: 1}}
                        title={`Marker ${index + 1}`}
                        onPress={onMarkerPress}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
