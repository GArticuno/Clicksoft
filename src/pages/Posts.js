import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Create } from './Create';
import { OtherUser } from './OtherUser';

import { useData } from '../context/DataContext';

import { Background } from '../components/Background';
import { Loading } from '../components/Loading';
import { PostBox } from '../components/PostBox';

import global from '../globalStyle.json';

const Stack = createStackNavigator();

const HeaderElement = styled.TouchableOpacity`
  margin-right: 20px;
`;

export function PostsStack({navigation}){

  function Posts({navigation}){
    const { posts } = useData();
    const [load, setLoad] = useState(true);
    const controller = new AbortController();
  
    function renderItem({item}){
      return <PostBox post={item} navigation={navigation}/>
    }
  
    useEffect(() => {
      if(posts !== undefined) setLoad(false);
      return ()=>{
        controller.abort();
      }
    }, [])
  
    return(
      <Background>
        {load === true ? (
          <Loading/>
        ):(
          <FlatList data={posts} renderItem={renderItem} keyExtractor={post => post.id.toString()}/>
        )}
      </Background>
    )
  }

  return(
    <Stack.Navigator
      initialRouteName='Posts'
      screenOptions={{
        headerStyle:{
          backgroundColor: global.primaryColor,
          shadowColor: global.primaryColor,
          elevation: 0,
        },
        headerTintColor:'#ffffff',
      }}
    >
      <Stack.Screen
          name='Posts'
          component={Posts}
          options={{
            title:'Posts',
            headerRight:()=>{
              return(
                <HeaderElement onPress={()=> navigation.navigate('CreatePost')}>
                  <Ionicons name='add-circle-outline' size={30} color='#ffffff'/>
                </HeaderElement> 
              )
            }
          }}
        />
        <Stack.Screen
          name='CreatePost'
          component={Create}
          options={{title: 'Create Post'}}
        />
        <Stack.Screen
          name='OtherUser'
          component={OtherUser}
          options={{title: 'User'}}
        />
    </Stack.Navigator>
  )
}