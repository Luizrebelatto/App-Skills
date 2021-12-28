import React from 'react';
import { StatusBar, View } from 'react-native';

import { Home } from './src/pages/Home'

export default function app(){
  return(
    <>
       <StatusBar barStyle='dark-content'/>
      <Home/>
    </>
   
  )
  
}