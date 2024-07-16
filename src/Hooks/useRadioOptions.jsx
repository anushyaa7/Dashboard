import { useState } from 'react';

const useRadioOptions = (initialOptions) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return {
    selectedOption,
    handleChange,
    options: initialOptions,
  };
};

export default useRadioOptions;
