import * as React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

const candidates = ['abc', 'def', 'ghi'];

export const SampleAutocomplete = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ m: 2 }}>Autocomplete</Box>

      <Autocomplete
        disablePortal
        options={candidates}
        sx={{ width: 300, m: 2 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Please Input" />}
      />
    </Box>
  );
};
