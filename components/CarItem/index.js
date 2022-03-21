import {View, ImageBackground, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import StyleButton from '../styleButton';

const CarItem = ({car}) => {
  const {name, tagline, image, taglineCTA} = car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.Titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyleButton type="primary" content="Custom Order" />
        <StyleButton content="Existing Inventory" type="secondary" />
      </View>
    </View>
  );
};

export default CarItem;
