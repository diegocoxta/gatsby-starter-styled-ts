import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from '../index';

describe('<IndexPage>', () => {
  it('renders properly', () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText('Hello World')).toBeTruthy();
  });
});
