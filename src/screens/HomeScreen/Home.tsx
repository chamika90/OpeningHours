import React from 'react';
import {View, StyleSheet} from 'react-native';
import OpeningHours from './components/OpeningHours/OpeningHours';
import {theme} from '../../config/theme';
const {colors} = theme;

const Home = () => {
  return (
    <View style={styles.container}>
      <OpeningHours />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
});
