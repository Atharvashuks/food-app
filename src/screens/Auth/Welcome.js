import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../main/styles';

const Welcome = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{fontSize: 26, color: color.mainContent, fontWeight: 'bold'}}>
          DISCOVER NEAR BY
        </Text>
        <Text
          style={{fontSize: 26, color: color.mainContent, fontWeight: 'bold'}}>
          RESTRAUNTRS AND
        </Text>
        <Text
          style={{fontSize: 26, color: color.mainContent, fontWeight: 'bold'}}>
          FOOD JOINTS
        </Text>
        <Text
          style={{fontSize: 26, color: color.mainContent, fontWeight: 'bold'}}>
          NEAR YOUR AREA
        </Text>
      </View>
      <View style={{flex:4,justifyContent: 'center'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#9dd6eb'
    },
    slide1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#9dd6eb'
    },
    slide1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#9dd6eb'
    }
});

export default Welcome;
