//@ts-nocheck
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(() => {
  const TRACK_H = 10;
  const THUMB = 36;

  return {
    height: TRACK_H,
    padding: `${THUMB / 2}px 0px`,
    '& .MuiSlider-rail': {
      height: TRACK_H,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
    },
    '& .MuiSlider-track': {
      height: TRACK_H,
      borderRadius: 20,
      backgroundColor: '#6B5CFF',
      boxShadow: '0 6px 20px rgba(107,92,255,0.18)',
    },
    '& .MuiSlider-thumb': {
      width: 22,
      height: 22,
      borderRadius: 4,
      background: '#fff',
      border: '1px solid #5547EB',
      boxShadow: '0 6px 20px rgba(107,92,255,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: '0 8px 26px rgba(107,92,255,0.22)',
      },

      '.thumb-dots': {
        width: 14,
        height: 14,
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 3,
        alignItems: 'center',
        justifyItems: 'center',
      },
      '.thumb-dots span': {
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: '#d6d6d6',
        display: 'block',
      },
    },

    '& .MuiSlider-valueLabel': {
      left: 'calc(-50% + -14px)',
      top: `-16px`,
      transform: 'none',
      background: '#4F3BFF',
      color: '#fff',
      borderRadius: 10,
      padding: '1px 0px',
      width: 68,
      fontWeight: 500,
      fontSize: 16,
      boxShadow: '0 6px 20px rgba(79,59,255,0.18)',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%) rotate(90deg) scale(0.2, 0.2)',
        top: '38%',
        width: 78,
        height: 46,
        background: '#4F3BFF',
        zIndex: 2,

        clipPath:
          'path("M0,0 C18,10 28,14 39,14 50,14 60,10 78,0 L78,46 C60,36 50,32 39,32 28,32 18,36 0,46 Z")',

        "@supports not (clip-path: path('M0,0'))": {
          clipPath:
            'polygon(0 0, 23% 20%, 36% 28%, 50% 28%, 64% 28%, 77% 20%, 100% 0, 100% 100%, 77% 77%, 64% 68%, 50% 68%, 36% 68%, 23% 77%, 0 100%)',
        },
      },
    },

    '& .MuiSlider-markLabel': {
      marginTop: 6,
      color: '#7d7d7d',
      fontSize: 12,
      fontWeight: 600,
    },

    '& .MuiSlider-mark': {
      backgroundColor: 'transparent',
    },
  };
});

export default StyledSlider;
