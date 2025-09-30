'use client';
import React from 'react';
import { Box } from '@mui/material';
import StyledSlider from '@/components/ui/StyledSlider';

const marks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((v) => ({
  value: v,
  label: String(v),
}));

const ExampleSlider = () => {
  const [value, setValue] = React.useState(100);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') setValue(newValue);
  };

  const valueLabelFormat = (value: number) => `${value} IP`;

  return (
    <Box sx={{ width: '100%', mx: 'auto', py: 4 }}>
      <StyledSlider
        value={value}
        onChange={handleChange}
        min={10}
        max={1000}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        aria-label="custom slider"
      />
    </Box>
  );
};

export default ExampleSlider;
