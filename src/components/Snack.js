import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import styled from 'styled-components/native';

import global from '../globalStyle.json';

const Snack = styled(Snackbar)`
  background-color: ${global.primaryColor};
  color: #ffffff;
`;

export default Snack;