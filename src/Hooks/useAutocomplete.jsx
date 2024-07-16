import React, { useState } from "react";

const useAutocomplete = (initialOptions) => {
    const [options, setOptions] = useState(initialOptions);
  
    return {
      options,
      setOptions,
    };
  };
  
  export default useAutocomplete;