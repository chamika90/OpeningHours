import 'react-native';
import React from 'react';
import {render, within} from '@testing-library/react-native';
import Schedule from '../../../../../../src/screens/home/components/openingHours/components/Schedule';

describe('Schedule ', () => {
  it('should match the schedule snapshot', () => {
    const scheduleProps = {
      monday: '10 AM - 1 PM,3 PM - 11 PM',
      tuesday: '3 PM - 11 PM',
      wednesday: '10 AM - 1 PM,3 PM - 11 PM',
      thursday: '10 AM - 1 PM,3 PM - 11 PM',
      friday: '10 AM - 1 PM',
      saturday: '10 AM - 1 PM',
      sunday: '3 PM - 11 PM',
    };
    const {toJSON} = render(<Schedule schedule={scheduleProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render seven rows for days in schedule screen', () => {
    const scheduleProps = {
      monday: '10 AM - 1 PM,3 PM - 11 PM',
      tuesday: '3 PM - 11 PM',
      wednesday: '10 AM - 1 PM,3 PM - 11 PM',
      thursday: '10 AM - 1 PM,3 PM - 11 PM',
      friday: '10 AM - 1 PM',
      saturday: '10 AM - 1 PM',
      sunday: '3 PM - 11 PM',
    };
    const {getAllByTestId} = render(<Schedule schedule={scheduleProps} />);
    const result = getAllByTestId('scheduleRow');
    expect(result.length).toBe(7); //closeText
  });

  it('should render close for monday', () => {
    const scheduleProps = {
      monday: '',
      tuesday: '3 PM - 11 PM',
      wednesday: '10 AM - 1 PM,3 PM - 11 PM',
      thursday: '10 AM - 1 PM,3 PM - 11 PM',
      friday: '10 AM - 1 PM',
      saturday: '10 AM - 1 PM',
      sunday: '3 PM - 11 PM',
    };
    const {getAllByTestId} = render(<Schedule schedule={scheduleProps} />);
    const closedDays = getAllByTestId('closeText');
    const openedDays = getAllByTestId('hoursListText');

    expect(closedDays.length).toBe(1);
    expect(openedDays.length).toBe(6);
  });

  it('should render close for monday and tuesday', () => {
    const scheduleProps = {
      monday: '',
      tuesday: '',
      wednesday: '10 AM - 1 PM,3 PM - 11 PM',
      thursday: '10 AM - 1 PM,3 PM - 11 PM',
      friday: '10 AM - 1 PM',
      saturday: '10 AM - 1 PM',
      sunday: '3 PM - 11 PM',
    };
    const {getAllByTestId} = render(<Schedule schedule={scheduleProps} />);
    const closedDays = getAllByTestId('closeText');
    const openedDays = getAllByTestId('hoursListText');

    expect(closedDays.length).toBe(2);
    expect(openedDays.length).toBe(5);
  });

  it('should not render hours list', () => {
    const scheduleProps = undefined;
    const {getAllByTestId} = render(<Schedule schedule={scheduleProps} />);
    const scheduleRow = getAllByTestId('scheduleRow');

    expect(within(scheduleRow[0]).queryByTestId('openHoursList')).toBeNull();
  });
});
