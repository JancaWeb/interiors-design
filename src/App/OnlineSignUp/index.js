import React from 'react';

import { ChoosePackage } from './ChoosePackage';
import { SelectDateTime } from './SelectDateTime';

export const OnlineSignUp = () => {

  const [ chosenPackage, setPackage ] = React.useState(null);
  
  const choosePackage = React.useCallback(
    (type) => () => setPackage(type),
    []
  );

  return (
    chosenPackage 
      ? <SelectDateTime chosenPackage={chosenPackage} />
      : <ChoosePackage choosePackage={choosePackage} />
  )
};