import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
class Scan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperCamera}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
        </View>
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
            Bisa juga pakai
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                width: 180,
                marginVertical: 20,
                marginHorizontal: 0,
                backgroundColor: '#fff',
                borderRadius: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <Icon
                name="phone-portrait-sharp"
                size={25}
                style={{ color: '#000' }}
              />
              <View style={{ marginTop: 3, marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', color: '#000' }}>
                  Nomor Ponsel
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                width: 180,
                marginVertical: 20,
                marginHorizontal: 10,
                backgroundColor: '#fff',
                borderRadius: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <Icon name="barcode-sharp" size={25} style={{ color: '#000' }} />
              <View style={{ marginTop: 3, marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', color: '#000' }}>
                  Loyalty
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Scan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperCamera: {
    flex: 1,
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
