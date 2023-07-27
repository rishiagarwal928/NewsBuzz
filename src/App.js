import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer';

const App = () => {
  const pageSize = 6;
  const apiKey = "4c182eae37cc4d7880b0cc9834726172";
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;