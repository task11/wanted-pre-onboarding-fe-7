import { useState } from "react";

export const useToggleState = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggleState = () => {
    setToggleState((currentState) => !currentState);
  };

  return { toggleState, handleToggleState };
};
