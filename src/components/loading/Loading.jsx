import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <div className='h-svh w-svh flex justify-center items-center'>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  );
}