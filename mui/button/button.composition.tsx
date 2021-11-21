import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Button } from './button';
import './button.composition.css';

export const MuiButtonVariants = () => {
  const variants = [
    'contained'
  , 'outlined'
  , 'text'
  ] as const;
  return (
  <div className="vertical">
    {variants.map(v => {
      return <>
        <Button variant={v}>MUI Button {v} variant</Button>
        <br /><br />
      </>
    })}
  </ div>
  )
};

export const MuiButtonColors = () => {
  const colors = [
    'inherit'
  , 'primary'
  , 'secondary'
  , 'success'
  , 'error'
  , 'info'
  , 'warning'
] as const;
  return (
  <>
    {colors.map(c => <Button color={c}>MUI Button {c}</Button>)}
  </>
  )
};

export const MuiButtonSizes = () => {
  const sizes = [
    'small'
    , 'medium'
    , 'large'
  ] as const;
  return (
  <div className="vertical">
    {sizes.map(s => {
      return <>
        <Button variant="outlined" size={s}>{s} MUI Button</Button>
        <br /><br />
      </>
    })}
  </ div>
  )
};

export const MuiButtonDisabled = () => {
  return <Button variant="contained" disabled>Disabled :(</Button>
}





