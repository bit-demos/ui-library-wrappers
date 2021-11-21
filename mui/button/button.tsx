import React from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps} from "@mui/material";

export type ButtonProps = MuiButtonProps;

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <MuiButton classes={className} {...rest}>{children}</MuiButton>
  );
}
