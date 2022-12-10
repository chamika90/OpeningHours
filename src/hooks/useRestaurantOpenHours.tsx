import {useEffect, useState} from 'react';
import {convertSecondsToTimeString} from '../helper/utils';
import {days, HourType} from '../config/constants';
import useFetch from './useFetch';
import {
  OpeningHour,
  ScheduleProps,
} from '../screens/HomeScreen/components/OpeningHours/Schedule';

const RESTAURANT_INFO_ENDPOINT =
  'https://run.mocky.io/v3/b938650b-611d-497a-addc-923cf5ad7ad1';

type weeklyScheduleProps = {
  [dayOfWeek: string]: Array<OpeningHour>;
};

export const useRestaurantOpenHours = () => {
  const {data, isLoading, error} = useFetch({url: RESTAURANT_INFO_ENDPOINT});
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [openHours, setOpenHours] = useState<ScheduleProps>();

  useEffect(() => {
    if (data) {
      const dummyData = {
        friday: [{type: 'open', value: 36000}],
        monday: [],
        saturday: [
          {type: 'close', value: 3600},
          {type: 'open', value: 36800},
        ],
        sunday: [
          {type: 'close', value: 3600},
          {type: 'open', value: 43200},
          {type: 'close', value: 75600},
        ],
        thursday: [
          {type: 'open', value: 43200},
          {type: 'close', value: 75600},
          {type: 'open', value: 36000},
          {type: 'close', value: 64800},
        ],
        tuesday: [
          {type: 'open', value: 36000},
          {type: 'close', value: 64800},
        ],
        wednesday: [
          {type: 'open', value: 43200},
          {type: 'close', value: 75600},
          {type: 'open', value: 36000},
          {type: 'close', value: 64800},
        ],
      };
      setupOpeningHours(dummyData);
    }
    if (error) {
      setIsDataLoading(isLoading);
    }
  }, [data, error, isLoading]);

  useEffect(() => {
    if (openHours) {
      setIsDataLoading(false);
    }
  }, [openHours]);

  const getPreviousDay = (index: number) => {
    return index === 0 ? days[days.length - 1] : days[index - 1];
  };

  const setupOpeningHours = (schedule: weeklyScheduleProps) => {
    let weeklyOpenHours = schedule;
    days.forEach((day, index) => {
      if (
        schedule[day].length > 0 &&
        schedule[day][0].type === HourType.Close
      ) {
        const previousDay = getPreviousDay(index);
        weeklyOpenHours[previousDay].push(schedule[day][0]);
        weeklyOpenHours[day].splice(0, 1);
      }
    });

    structureTime(weeklyOpenHours);
  };

  const getTimeDuration = (openTimeInSec: number, closeTimeInSec: number) => {
    const openTime = convertSecondsToTimeString(openTimeInSec);
    const closeTime = convertSecondsToTimeString(closeTimeInSec);

    return ` ${openTime} - ${closeTime} `;
  };

  const structureTime = (weeklyOpenHours: weeklyScheduleProps) => {
    let structuredList = {};
    days.forEach(day => {
      const openHoursList = weeklyOpenHours[day];
      const durationList: Array<string> = [];
      if (openHoursList.length > 0) {
        openHoursList.forEach((openHourObj, index: number) => {
          if (openHourObj.type === HourType.Open) {
            const openDuration = getTimeDuration(
              openHourObj.value,
              openHoursList[index + 1].value,
            );
            durationList.push(openDuration);
          }
        });
      }
      structuredList = {...structuredList, [day]: durationList.toString()};
    });

    setOpenHours(structuredList);
  };

  return {openHours, isDataLoading, error};
};
