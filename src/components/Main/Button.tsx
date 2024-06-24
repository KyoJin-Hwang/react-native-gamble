import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyleSheetPropsT} from '@/types/global';
interface PROPS_BUTTON_T {
  text: string;
  fuc: () => void;
}
const CustomButton = (props: PROPS_BUTTON_T) => {
  return (
    <View style={styles().buttonContainer}>
      <Button title={props.text} />
      <View style={styles({str: 'red'}).buttonContainer}></View>
      <View style={styles({str: 'black'}).buttonContainer}></View>
    </View>
  );
};

export default CustomButton;

const styles = (props?: StyleSheetPropsT) => {
  return StyleSheet.create({
    buttonContainer: {
      flex: 1,
      backgroundColor: props?.str,
    },
  });
};
