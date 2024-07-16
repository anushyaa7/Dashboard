import * as React from 'react';
import Forms from './Forms';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useAutocomplete from '../Hooks/useAutocomplete';
import useRadioOptions from '../Hooks/useRadioOptions';
import useButtonActions from '../Hooks/useButtonActions';

const top100Films = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' },
  { label: 'Fight Club' },
  { label: 'Forrest Gump' },
  { label: 'Inception' },
];

const radioOptionsData = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const Details = () => {
  const autocomplete = useAutocomplete(top100Films);
  const radioOptions = useRadioOptions(radioOptionsData);
  const buttonActions = useButtonActions();

  return (
    <Forms 
      options={autocomplete.options} 
      placeholder="Placeholder"
      radioOptions={radioOptions}
      buttonActions={buttonActions}
    />
  );
};
  
  export default Details;