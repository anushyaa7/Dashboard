import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import useRadioOptions from '../Hooks/useRadioOptions';
import useButtonActions from '../Hooks/useButtonActions';
import useAutocomplete from '../Hooks/useAutocomplete';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Forms = ({ options, placeholder, radioOptions, buttonActions }) => {
  const { selectedOption, handleChange } = radioOptions; // Corrected: use the passed props instead of calling the hook
  const { handleReset, handleSaveDraft, handleNext } = buttonActions; // Corrected: use the passed props instead of calling the hook

  const buttons = [
    {
      label: 'RESET',
      variant: 'outlined',
      icon: <RotateLeftIcon />,
      onClick: handleReset,
    },
    {
      label: 'SAVE DRAFT',
      variant: 'outlined',
      icon: <BookmarkIcon />,
      onClick: handleSaveDraft,
    },
    {
      label: 'NEXT',
      variant: 'contained',
      icon: <SkipNextIcon />,
      onClick: handleNext,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Typography variant="subtitle1" gutterBottom>
        Answer Type
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={placeholder} />}
      />
      
      <Typography variant="subtitle1" gutterBottom style={{ marginTop: '20px' }}>
        Mandatory
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedOption}
        onChange={handleChange}
      >
        {radioOptions.options.map((option, index) => (
          <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>

      <Stack direction="row" spacing={2} marginTop={'20px'}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            endIcon={button.icon}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        ))}
      </Stack>
    </div>
  );
};


export default Forms;
