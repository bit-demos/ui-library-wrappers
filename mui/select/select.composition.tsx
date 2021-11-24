import React, { useState } from 'react';
import { MenuItem, SelectChangeEvent ,FormControl, InputLabel } from '@mui/material';
import { Select } from './select';

export const BasicSelect = () => {

  const [age, setAge] = useState('');

  function handleChange(e: SelectChangeEvent){
    setAge(e.target.value as string);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
};
