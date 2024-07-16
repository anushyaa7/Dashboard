import React from "react";

const useButtonActions = () => {
    const handleReset = () => {
      console.log('Reset clicked');
    };
  
    const handleSaveDraft = () => {
      console.log('Save Draft clicked');
    };
  
    const handleNext = () => {
      console.log('Next clicked');
    };
  
    return {
      handleReset,
      handleSaveDraft,
      handleNext,
    };
  };
  
  export default useButtonActions;
  