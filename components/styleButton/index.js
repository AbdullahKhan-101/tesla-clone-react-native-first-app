import {StyleSheet, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const StyleButton = ({type, content, onPress}) => {
  //   const type = props.type;

  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const color = type === 'primary' ? '#ffffffa6' : '#171a20cc';
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[styles.button, {backgroundColor: backgroundColor}]}>
        <Text style={[styles.text, {color: color}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;
