import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styled from 'styled-components/native';

import { useData } from '../context/DataContext';

import { Box } from './Box';

import global from '../globalStyle.json';

const CloseIcon = styled.View`
  margin: 3px 0;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  margin-bottom: 10px;
`
const Posted = styled.Text`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${global.tertiaryColor};
  margin-bottom: 9px;
`
const Content = styled.Text`
  font-size: 14.5px;
  font-family: 'Roboto';
  color: ${global.secondaryTextColor};
`

export function PostBox({ post, navigation }){
  const { users, getPostbyUser, getUser, deletePost } = useData();

  return(
    <>
      <Box>
        <CloseIcon>
          <TouchableOpacity onPress={()=> deletePost(post.id)} >
            <Ionicons     
              name={'close-circle-outline'} 
              size={26} 
              color={global.primaryColor}
            />          
          </TouchableOpacity>
        </CloseIcon>
        <Title>
          {post.title}
        </Title>     
        <Posted onPress={()=>[getUser(post.userId), getPostbyUser(post.userId), navigation.navigate('OtherUser')]}>
          posted by @{users.find(user => {return user.id === post.userId}).username}
        </Posted>
        <Content>
          {post.body}
        </Content>
      </Box>
    </>
  )
};