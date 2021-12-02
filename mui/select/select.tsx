import React, { ReactNode } from 'react';
import { Select as MUISelect, SelectProps as MIUSelectProps } from '@mui/material';

export type SelectProps = MIUSelectProps;

export function Select({ children, onChange, ...rest }: SelectProps) {
  function handleOnChange(e: any, child: ReactNode) {
    onChange(e, child);
    alert(`${(e.target.value)}\'s a great choice!`);
  }

  return (
    <MUISelect {...rest} onChange={handleOnChange}>
      {children}
    </MUISelect>
  );
}
