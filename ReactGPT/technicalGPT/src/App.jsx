import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Count } from '/src/components/count.jsx';
import { Greeting } from '/src/components/greeting.jsx';
import {DataFetcher} from '/src/components/DataFetch.jsx'
import {MultipleForms} from '/src/components/MultipleForms.jsx'
import {TodoList} from '/src/components/TodoList.jsx'
import DebounceFunction from '/src/components/DebounceFunction.jsx'

export function App(props) {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>

      </BrowserRouter>

    </>
  );
}

function Home(){
  return (
  <div>
  <h2>Home</h2>
  <Greeting name='Luka' />
  </div>)
}
function About(){
return(
  <div>
  <h1>About</h1>
  <Count></Count>
  <DataFetcher/>

  </div>
  
)
}
function Contact(){
  return(
    <div>
    <h1>Contact</h1>
    <MultipleForms/>
    <DebounceFunction/>
    </div>
  )
}