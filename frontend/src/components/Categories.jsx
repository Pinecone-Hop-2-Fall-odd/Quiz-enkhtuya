import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Categories() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Choose Category" />}
    />
  );
}
const categories = [
  { label: 'Science'},
  { label: 'Art & Humanities'},
  { label: 'Social Science'},
  { label: 'Languages'},
  { label: 'Other'},
];
