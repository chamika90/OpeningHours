import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
require('jest-fetch-mock').enableMocks();
import ErrorComponent from '../../src/components/ErrorComponent/ErrorComponent';

describe('Opening Hours ', () => {
  it('should match the opening hours snapshot', () => {
    const {toJSON} = render(
      <ErrorComponent message={'Something went wrong'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title ', () => {
    const {getByTestId} = render(
      <ErrorComponent message={'Something went wrong'} />,
    );
    expect(getByTestId('error')).toBeTruthy();
  });
});
