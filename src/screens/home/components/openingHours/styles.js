import {StyleSheet} from 'react-native';
import {theme} from '../../../../config/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  openHoursContainer: {
    borderRadius: 10,
    backgroundColor: colors.primaryCardBackgroundColor,
    shadowColor: colors.primaryShadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    marginBottom: 10,
    shadowRadius: 2,
    padding: 20,
    margin: 10,
  },
});
