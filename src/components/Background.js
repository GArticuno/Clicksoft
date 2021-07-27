import React from 'react';
import styled from 'styled-components/native';

import global from '../globalStyle.json';

const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${global.backgroundColor};
`

export function Background({children}){

  return(
    <BackgroundContainer>
      {children}
    </BackgroundContainer>
  )
}

