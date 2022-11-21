import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelect } from './select.composition';

it('should render with the correct text', () => {
  const { getByLabelText } = render(<BasicSelect />);
  const rendered = getByLabelText('Age');
  expect(rendered).toBeTruthy();
});
