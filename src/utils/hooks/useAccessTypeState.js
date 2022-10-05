import { useState } from "react";

import { ACCESS_TYPE } from "../../constants";

export const useAccessTypeState = () => {
  const [accessType, setAccessType] = useState(ACCESS_TYPE.LOGIN);

  const reversAceessType = (accessType) => {
    return accessType === ACCESS_TYPE.REGISTER ? ACCESS_TYPE.LOGIN : ACCESS_TYPE.REGISTER;
  };

  const changeAccessType = (accessType) => {
    setAccessType(reversAceessType(accessType));
  };

  return { accessType, reversAceessType, changeAccessType };
};
