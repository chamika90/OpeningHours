import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Title from '../../../../../../src/screens/home/components/openingHours/components/Title';

describe('Title ', () => {
  it('should match the title snapshot', () => {
    const {toJSON} = render(<Title title="Open hours" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title ', () => {
    const {getByTestId} = render(<Title title="Open hours" />);
    expect(getByTestId('title')).toBeTruthy();
  });
});
