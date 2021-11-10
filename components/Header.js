import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import TitleText from './TitleText';

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={props.style}>{props.title}</TitleText>
      <TouchableOpacity 
        activeOpacity={0.6} 
        onPress={props.switchTheme}>

        <View>
          <Image style={styles.image} 
            source={require('../img/bulb.png')}
          />
        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse'
    
  },
  image: {
    borderRadius: 5,
    width: 40,
    height: 40
}
});

export default Header;
