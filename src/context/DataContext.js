import React, {createContext, useContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

const DataContext = createContext();

const headers =  {
  'Content-type': 'application/json; charset=UTF-8',
}

export function DataContextProvider({children}){
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsByUser, setPostsByUser] = useState([]);
  
  async function getPosts(){
    api.get('/posts').then(res => {
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    })
    return;
  }

  async function getProfile(){
    api.get('/users/1').then(res => {
      setProfile(res.data)
    }).catch(err => {
      console.log(err)
    })
    return;
  }

  async function getUsers(){
    api.get('/users').then(res => {
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })
    return;
  }
  
  async function getUser(userId){
    api.get(`/users/${userId}`).then(res => {
      setUser(res.data)
    }).catch(err => {
      console.log(err)
    })
    return;
  }

  async function getPostbyUser(userId){
    api.get(`/posts?userId=${userId}`).then(res => {
      setPostsByUser(res.data)
    }).catch(err => {
      console.log(err)
    })
    return;
  }

  async function setPost(newPost){
    return api.post('/posts', JSON.stringify(newPost), {headers})
    .then((res => console.log(JSON.stringify(res.data, null, 2))))
    .catch(err => console.log(err))
  }

  async function deletePost(postId){
    Alert.alert('Deleting this post', `Are you sure you want to delete this post?`,[
      {
        text: 'Yes',
        onPress: async () => {
          await api.delete('/posts/' + postId);
          return console.log('Deleted: ', postId);
        }
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
    
  }

  useEffect(()=>{
    getProfile();
    getPosts();
    getUsers();
  },[])

  return(
    <DataContext.Provider value={{
      user,
      users,
      profile,
      posts,
      postsByUser,
      getUser,
      getPostbyUser,
      setPost,
      deletePost,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData(){
  const value = useContext(DataContext);
  
  return value;
}


