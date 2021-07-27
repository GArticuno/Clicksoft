import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useData } from '../context/DataContext';

import { Background } from '../components/Background';
import { Loading } from '../components/Loading';
import { PostBox } from '../components/PostBox';
import { UserBox } from '../components/UserBox';

export function Profile({navigation}){
  const { profile, postsByUser, getPostbyUser } = useData();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(profile !== null){
        getPostbyUser(profile.id)
        setLoad(false)
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [profile])

  return(
    <Background>
      {load === true ? (
        <Loading/>
      ):(
        <ScrollView>
        <UserBox user={profile}>
          Posts by you
        </UserBox>
        {postsByUser.map(post => {
          return(<PostBox post={post} navigation={navigation} key={post.id}/>)
        })}
      </ScrollView>   
      )}
    </Background>
  )
}