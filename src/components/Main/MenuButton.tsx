import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface PROPS_BUTTON_T {
  text: string;
  fuc?: () => void;
}
const MenuButton = (props: PROPS_BUTTON_T) => {
  return (
    <View style={styles().buttonContainer}>
      <TouchableOpacity style={styles().button}>
        <Text style={styles().text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;

const styles = () => {
  return StyleSheet.create({
    buttonContainer: {
      marginTop: 30,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 15,
      backgroundColor: '#0064FF',
    },
    text: {
      fontSize: 20,
      color: '#FFFFFF',
    },
  });
};
