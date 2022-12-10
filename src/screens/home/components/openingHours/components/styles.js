import {StyleSheet} from 'react-native';
import {theme} from '../../../../../config/theme';

const {colors} = theme;

export const styles = StyleSheet.create({
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.primaryListSeparatorColor,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  nameContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  timeDurationText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  closeText: {
    color: colors.secondaryTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  today: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: colors.textGreenColor,
    marginLeft: 5,
  },
  hoursContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
