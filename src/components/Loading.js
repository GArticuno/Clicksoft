import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import global from '../globalStyle.json';

const Load = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

`

export function Loading(){
  return(
    <Load>
      <ActivityIndicator size={70} color={global.primaryColor}/>
    </Load>
    
  )
}