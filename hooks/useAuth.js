import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../config/firebase';

export default function useAuth() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const onSub = onAuthStateChanged(auth,(user)=>{
        console.log("User Data: ", user);
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
      })
    
      return onSub
    }, [])
    
    return {user}
}