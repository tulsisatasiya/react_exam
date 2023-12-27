import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {  getproduct, } from '../toolkit/api/api';

const Home = () => {
    
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data)
  console.log(data);

  useEffect(() => {
    dispatch(getproduct())
  }, [])

  return (
    <div>
       
     home
    </div>
  )
}

export default Home

