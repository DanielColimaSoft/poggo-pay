/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native';
import {Styles} from '../../../Styles/PoggoPayStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import React from 'react';

export default function Location() {
  return (
    <SafeAreaView>
      <View style={Styles.titleBox}>
        <Ionicons
          name="location-sharp"
          size={20}
          color="#FB8500"
          style={Styles.icons}
        />
        <Text style={Styles.titleText}>
          Eastl
          <Text>ake Location</Text>
        </Text>
      </View>
      <View style={Styles.foundBox}>
          <Text style={Styles.foundText}>Found us in the map</Text>
      </View>
      <View style={Styles.mapBox}>
        <MapView
        style={Styles.map}
          region={{
            latitude: 31.69996528788384,
            longitude: -106.24069344670811,
            latitudeDelta: 0.7023,
            longitudeDelta: 0.0121,
          }}>
          <Marker draggable
            title={'Marcador agregado'}
            pinColor={'#023047'}
            coordinate={{
              latitude: 31.69996528788384,
              longitude: -106.24069344670811,
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};