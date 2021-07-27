import React from 'react';
import { Card } from 'react-native-paper';

import styled from 'styled-components/native';

const BoxContainer = styled(Card)`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin: 8px;
  border-radius: 10px;
  padding: 15px 13px;
`;

export function Box({children, ...props}){
  return(
    <BoxContainer {...props} style={{elevation: 2}}>
      {children}
    </BoxContainer>
  )
}

