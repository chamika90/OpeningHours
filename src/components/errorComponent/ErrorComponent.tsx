import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

type ErrorComponentProps = {
  message: string;
};

const ErrorComponent = ({message}: ErrorComponentProps) => {
  return <Text style={styles.errorMessage}>{message} </Text>;
};

export default ErrorComponent;
const styles = StyleSheet.create({
  errorMessage: {
    color: colors.primaryTextColor,
  },
});
