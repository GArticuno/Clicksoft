import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';

import { DataContextProvider } from './src/context/DataContext';
import { TabMain } from './src/pages/TabMain';

import global from './src/globalStyle.json';

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  
  return (
    <Container >
      <StatusBar backgroundColor={global.primaryColor} barStyle='light-content'/>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <DataContextProvider>
            <TabMain/>
          </DataContextProvider>  
        </NavigationContainer>           
      </SafeAreaView>
    </Container>      
  );
}

