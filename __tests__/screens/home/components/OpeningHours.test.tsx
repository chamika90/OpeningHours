import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
require('jest-fetch-mock').enableMocks();
import OpeningHours from '../../../../src/screens/HomeScreen/components/OpeningHours/OpeningHours';

describe('Opening Hours ', () => {
  it('should match the opening hours snapshot', () => {
    const {toJSON} = render(<OpeningHours />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title ', () => {
    const {getByTestId} = render(<OpeningHours />);
    expect(getByTestId('title')).toBeTruthy();
  });

  it('should be initially loading', async () => {
    const {getByTestId} = render(<OpeningHours />);

    await waitFor(() => {
      expect(getByTestId('loader')).toBeDefined();
    });
  });
});
