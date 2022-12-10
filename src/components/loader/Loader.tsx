import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

type LoaderProps = {
  isLoading: boolean;
  size?: 'large' | 'small' | number | undefined;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const Loader = ({isLoading, size, color, style}: LoaderProps) => {
  return (
    <ActivityIndicator
      style={style ?? styles.loader}
      animating={isLoading}
      size={size ?? 'large'}
      color={color ?? colors.primaryLoaderColor}
    />
  );
};

export default Loader;
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});
