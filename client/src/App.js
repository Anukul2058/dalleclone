import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import { logo } from './assets'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
          <Link to={'/createpost'}><button>Create</button></Link>

        </header>
        <main>
          <Routes>
            <Route path={'/createpost'} element={<CreatePost />} />
            <Route path={'/'} element={<Home />} />

          </Routes>

        </main>

      </BrowserRouter>

    </div>
  );
}

export default App;
