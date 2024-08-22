import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {RNCamera} from 'react-native-camera';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles.js';


export default function App() {

  
  const [items, _] = useState([
    "Windows",
    "Doors",
    "Site Safety"
  ])
  
  const render_item = items.map((item, index) => {
    const testColor = () => {
      styles.item = {...styles.item, background: 'red'}
    }
    return (
      <Text style={styles.item} onPress={ () => testColor() } key={index}>{item}</Text>
    )
  })

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.burger}>
          <View style={styles.first}></View>
          <View style={styles.mid}></View>
          <View style={styles.last}></View>
        </View>
        <View style={styles.appTitle}>
          <Text style={styles.title} >SW@RM</Text>
        </View>
      </View>

      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permission to use audio recording',
          //   message: 'We need your permission to use your audio',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />

      <View style={styles.under}>
        {render_item}
      </View>
    </View>
  );
}

