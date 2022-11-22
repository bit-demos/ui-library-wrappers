import React from 'react';
import { Button } from './button';

export const MuiButtonVariants = () => {
  const variants = [
    'contained',
    'outlined',
    'text',
  ] as const;

  return (
    <div className="vertical">
      {variants.map((v, index) =>
      (<div key={v + index}>
        <Button variant={v}>MUI Button {v} variant</Button>
        <br />
        <br />
      </div>))
      }
    </ div >
  );
};

export const MuiButtonColors = () => {
  const colors = [
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ] as const;

  return (
    <>
      {colors.map((c, index) => <Button key={index} color={c}>MUI Button {c}</Button>)}
    </>
  );
};

export const MuiButtonSizes = () => {
  const sizes = [
    'small',
    'medium',
    'large',
  ] as const;

  return (
    <div className="vertical">
      {sizes.map((s, index) => <>
        <Button key={index} variant="outlined" size={s}>{s} MUI Button</Button>
        <br /><br />
      </>)}
    </ div>
  );
};

export const MuiButtonDisabled = () => <Button variant="contained" disabled>Disabled :(</Button>;
