import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'

function App() {

  return (
    <>
  <Header></Header>
    <main className='md:flex'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main> 
    </>
  )
}

export default App
