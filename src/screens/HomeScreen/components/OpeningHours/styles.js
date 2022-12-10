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
    shadowRadius: 2,
    padding: 30,
    margin: 10,
    elevation: 10,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 10,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: colors.primaryTextColor,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
  },
  headerIcon: {
    marginRight: 15,
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 12,
    backgroundColor: colors.primaryTextColor,
  },
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
    fontSize: 12,
    color: colors.primaryTextColor,
    textAlign: 'center',
  },
  timeDurationText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: colors.primaryTextColor,
  },
  closeText: {
    color: colors.secondaryTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  today: {
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    color: colors.textGreenColor,
    marginLeft: 6,
    textAlign: 'center',
  },
  hoursContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
