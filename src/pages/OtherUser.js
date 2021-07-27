import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useData } from '../context/DataContext';

import { Background } from '../components/Background';
import { Loading } from '../components/Loading';
import { PostBox } from '../components/PostBox';
import { UserBox } from '../components/UserBox';

export function OtherUser({navigation}){
  const { user, postsByUser } = useData();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(user !== null){
        setLoad(false)
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [user])

  return(
    <Background>
      {load === true ? (
        <Loading/>
      ):(
        <ScrollView>
          <UserBox user={user}>
            Posts by {user.name}
          </UserBox>
          {postsByUser.map(post => {
            return(<PostBox post={post} navigation={navigation} key={post.id}/>)
          })}
        </ScrollView>   
      )}
    </Background>
  )
}