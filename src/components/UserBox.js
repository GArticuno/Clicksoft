import React from 'react';
import {FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { Box } from './Box';

import global from '../globalStyle.json';

const User = styled.Text`
  font-size: 24px;
  color: ${global.primaryColor};
  margin-bottom: 7px;
`;

const UserName = styled.Text`
  font-size: 14px;
  color: ${global.tertiaryColor};
`;

const BlockInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
`;

const Contact = styled.Text`
  font-size: 16px;
  margin-left: 17px;
  color: ${global.tertiaryTextColor};
`;

const About = styled.Text`
  font-size: 16px;
  margin-left: 17px;
  color: ${global.secondaryColor};
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #A0A0A0;
  margin-top: 14px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${global.primaryColor};

`;

function ContentBox({user}){
  return(
    <Box>
      <User>{user.name}</User>
      <UserName>@{user.username}</UserName>
      <View>
        <BlockInfo>
          <Feather name='phone' size={20} color={global.tertiaryTextColor}/>
          <Contact>{user.phone}</Contact>
        </BlockInfo>
        <BlockInfo>
          <Feather name='mail' size={20} color={global.tertiaryTextColor}/>
          <Contact>{user.email}</Contact>
        </BlockInfo>
      </View>
      <Divider/>
      <View>
        <BlockInfo>
          <FontAwesome name='building-o' size={20} color={global.secondaryColor}/>
          <About>{user.company.name}</About>
        </BlockInfo>
        <BlockInfo>
          <Ionicons name='location-outline' size={20} color={global.secondaryColor}/>
          <About>{user.address.street}, {user.address.suite}, {user.address.city}</About>
        </BlockInfo>
        <BlockInfo>
          <Feather name='link' size={20} color={global.secondaryColor}/>
          <About>{user.website}</About>
        </BlockInfo>
      </View> 
    </Box>     
  )
}

export function UserBox({user, children}){
  
  return(
    <>
      <ContentBox user={user}/>  
      <Title>
        {children}
      </Title>
    </>
      
  )
}