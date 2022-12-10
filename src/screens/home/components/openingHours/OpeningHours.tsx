import React from 'react';
import {View} from 'react-native';
import {useRestaurantOpenHours} from '../../../../hooks/useRestaurantOpenHours';
import Title from './components/Title';
import Loader from '../../../../components/loader/Loader';
import Schedule from './components/Schedule';
import {styles} from './styles';
import ErrorComponent from '../../../../components/errorComponent/ErrorComponent';

const OpeningHours = () => {
  const {openHours, isDataLoading, error} = useRestaurantOpenHours();

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
