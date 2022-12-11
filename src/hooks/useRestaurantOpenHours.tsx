import {useEffect, useState} from 'react';
import {convertSecondsToTimeString} from '../helper/utils';
import {API_ENDPOINTS, DAYS, HOUR_TYPE} from '../config/constants';
import useFetch from './useFetch';
import {
  OpeningHour,
  ScheduleProps,
} from '../screens/HomeScreen/components/OpeningHours/Schedule';

type weeklyScheduleProps = {
  [dayOfWeek: string]: Array<OpeningHour>;
};

export const useRestaurantOpenHours = () => {
  const {data, isLoading, error} = useFetch({url: API_ENDPOINTS.OPEN_HOURS});
  const [isDataLoading, setIsDataLoading] = useState(true);

  const [openHours, setOpenHours] = useState<ScheduleProps>();

  useEffect(() => {
    if (data) {
      setupOpeningHours(data);
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
    return index === 0 ? DAYS[DAYS.length - 1] : DAYS[index - 1];
  };

  const setupOpeningHours = (schedule: weeklyScheduleProps) => {
    let weeklyOpenHours = schedule;
    DAYS.forEach((day, index) => {
      if (
        schedule[day].length > 0 &&
        schedule[day][0].type === HOUR_TYPE.CLOSE
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
    DAYS.forEach(day => {
      const openHoursList = weeklyOpenHours[day];
      const durationList: Array<string> = [];
      if (openHoursList.length > 0) {
        openHoursList.forEach((openHourObj, index: number) => {
          if (openHourObj.type === HOUR_TYPE.OPEN) {
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
