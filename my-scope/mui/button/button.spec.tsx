import React from 'react';
import { render } from '@testing-library/react';
import { MuiButtonVariants } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MuiButtonVariants />);
  const rendered = getByText('MUI Button contained variant');
  expect(rendered).toBeTruthy();
});
