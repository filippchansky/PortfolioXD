import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import MySwiper from './components/MySwiper/MySwiper';
import "./normalize.css"
import MainPage from './Pages/MainPage/MainPage';
import YesNoPage from './Pages/YesNoPage/YesNoPage';

interface IProps {
  
}

const App:React.FC<IProps> = ({}) => {

  

  

  return (
    <div>
      <Routes>
        <Route path='/' element ={<MainPage/>}/>
        <Route path='/yesno' element ={<YesNoPage/>}/>
      </Routes>
    </div>
  )
}
export default App;