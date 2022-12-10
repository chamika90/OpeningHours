import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../../../../config/theme';
const {colors} = theme;

type TitleProps = {
  title: string;
};
const Title = ({title}: TitleProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <View style={styles.headerIcon}>
          <Icon name="clock" size={18} color={colors.primaryIconColor} />
        </View>
        <Text testID="title" style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
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
    marginRight: 10,
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 10,
    backgroundColor: colors.primaryTextColor,
  },
});
