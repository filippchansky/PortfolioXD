import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import MySwiper from './components/MySwiper/MySwiper';
import "./normalize.css"
import GithubPage from './Pages/GithubPage/GithubPage';
import MainPage from './Pages/MainPage/MainPage';
import TodosPage from './Pages/TodosPage/TodosPage';
import YesNoPage from './Pages/YesNoPage/YesNoPage';

interface IProps {
  
}

const App:React.FC<IProps> = ({}) => {

  

  

  return (
    <div>
      <Routes>
        <Route path='/' element ={<MainPage/>}/>
        <Route path='/yesno' element ={<YesNoPage/>}/>
        <Route path='/todos' element = {<TodosPage/>}/>
        <Route path='/github' element = {<GithubPage/>}/> 
      </Routes>
    </div>
  )
}
export default App;