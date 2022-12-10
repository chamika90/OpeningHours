import React from 'react';
import {Text, View} from 'react-native';
import {useRestaurantOpenHours} from '../../../../hooks/useRestaurantOpenHours';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../../../config/theme';
import Loader from '../../../../components/Loader/Loader';
import Schedule from './Schedule';
import {styles} from './styles';
import ErrorComponent from '../../../../components/ErrorComponent/ErrorComponent';

const {colors} = theme;

const OpeningHours = () => {
  const {openHours, isDataLoading, error} = useRestaurantOpenHours();

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

  return (
    <View style={styles.openHoursContainer}>
      <Title title={'Opening hours'} />
      {openHours && <Schedule schedule={openHours} />}
      <Loader isLoading={isDataLoading} />
      {error && (
        <ErrorComponent message="Something went wrong. please try again later" />
      )}
    </View>
  );
};

export default OpeningHours;
