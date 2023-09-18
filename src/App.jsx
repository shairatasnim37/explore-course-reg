

import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/bookmarks/bookmarks'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <div className='main-container'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
