import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

import { useData } from '../context/DataContext';

import { Background } from '../components/Background';
import { Box } from '../components/Box';
import Snack from '../components/Snack';

import global from '../globalStyle.json';

const ViewButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 14px;
`;

const FieldTitle = styled.TextInput`
  width: 100%;
  font-size: 16px;
  background-color: #F2F6FF;
  border: 1px;
  border-radius: 5px;
  border-color: ${global.secondaryColor};
  padding: 5px 6px;
  margin-bottom: 14px;
`;

const FieldContent = styled.TextInput`
  width: 100%;
  font-size: 16px;
  background-color: #F2F6FF;
  border: 1px;
  border-radius: 5px;
  border-color: ${global.secondaryColor};
  padding: 5px 6px;
  min-height: 100px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border-radius: 10px;
  width: 110px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`;

export function Create(){
  const { profile, setPost } = useData();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const newPost = {
    userId: profile.id,
    title: title,
    body: content
  }
  
  return(
    <Background>
      <ScrollView>
        <Box>
          <FieldTitle 
            value={title}
            style={{textAlignVertical: 'top'}}
            onChangeText={setTitle} 
            placeholder='Enter the title of the post here.'
            multiline
            numberOfLines={2}
          />
          <FieldContent 
            value={content}
            style={{textAlignVertical: 'top'}}
            onChangeText={setContent}
            placeholder='Enter the contents of the post here.'
            multiline
          />
          <ViewButton >
            <StyledButton
              disabled={title === '' || content === ''}
              style={
                title === '' || content === '' ? 
                {backgroundColor: global.quaternaryTextColor}:
                {backgroundColor: global.primaryColor}
              }

              onPress={()=> [setPost(newPost),setTitle(''),setContent(''),setIsVisible(true)]}
            >
              <ButtonText>Post</ButtonText>
            </StyledButton>
            <StyledButton 
              style={{backgroundColor: '#FB3838'}}
              onPress={()=> [setTitle(''),setContent('')]}
            >
              <ButtonText>Cancel</ButtonText>
            </StyledButton>
          </ViewButton>
        </Box>         
      </ScrollView>
      <Snack
        visible={isVisible}
        duration={4000}
        onDismiss={()=> setIsVisible(false)}
        action={{
          label: 'Undo',
          color: '#fced16',
          onPress: () => {
            setIsVisible(false)
          },
        }}>
        Posted!
      </Snack>
    </Background>
  )
}