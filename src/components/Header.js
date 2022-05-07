import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

import {color, parameter} from '../main/styles';

const Header = ({title, iconType}) => {
  return (
    <View style={styles.Header_header}>
      <View style={{marginLeft: 5}}>
        <Icon
          type="material-community"
          name={iconType}
          color={color.bg}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header_header: {
    flexDirection: 'row',
    backgroundColor: color.mainContent,
    height: parameter.headerHeight,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  headerText: {
    color: color.bg,
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 30,
  },
});

export default Header;
