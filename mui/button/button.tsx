import React from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps} from "@mui/material";

export type ButtonProps = { message?: string } & MuiButtonProps;

const defaultMessage = 'This is a customised MUI button!';

export function Button({ message = defaultMessage, children, className, ...rest }: ButtonProps) {

function handleClick(){
  alert(message)
}

  return (
    <MuiButton classes={className} onClick={handleClick} {...rest}>{children}</MuiButton>
  );
}
