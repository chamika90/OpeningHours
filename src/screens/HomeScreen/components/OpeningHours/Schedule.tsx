import React, {useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {days} from '../../../../config/constants';
import {
  convertFirstLetterToUpperCase,
  getCurrentDay,
} from '../../../../helper/utils';
import {styles} from './styles';

export type ScheduleProps = {
  [dayOfWeek: string]: string;
};
type ScheduleRowProps = {
  day: string;
};
export type HoursListProps = {
  hoursList: Array<OpeningHour>;
};

export type OpeningHour = {
  type: string;
  value: number;
};

type OpenHoursListProps = {
  hoursList: string;
};

const Schedule = ({schedule}: {schedule: ScheduleProps}) => {
  const currentDay = useMemo(() => getCurrentDay(), []);

  const OpenHoursList = ({hoursList}: OpenHoursListProps) => {
    return (
      <View>
        {(hoursList !== '' && (
          <Text
            style={styles.timeDurationText}
            adjustsFontSizeToFit
            testID="hoursListText">
            {hoursList}
          </Text>
        )) || (
          <Text testID="closeText" style={styles.closeText}>
            Closed
          </Text>
        )}
      </View>
    );
  };

  const ScheduleRow = ({day}: ScheduleRowProps) => {
    const formatedDay = convertFirstLetterToUpperCase(day);
    const isToday = day === currentDay.toLowerCase();
    return (
      <View testID="scheduleRow" style={styles.rowContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.day}>{formatedDay}</Text>
          {isToday && <Text style={styles.today}>TODAY</Text>}
        </View>

        {schedule && (
          <View testID="openHoursList" style={styles.hoursContainer}>
            <OpenHoursList hoursList={schedule[day] ?? ''} />
          </View>
        )}
      </View>
    );
  };

  const ListSeporator = () => {
    return <View style={styles.listSeparator} />;
  };

  return (
    <FlatList
      testID="schedule"
      data={days}
      ItemSeparatorComponent={() => <ListSeporator />}
      renderItem={({item}) => <ScheduleRow day={item} />}
      ListFooterComponent={() => <ListSeporator />}
    />
  );
};

export default Schedule;
