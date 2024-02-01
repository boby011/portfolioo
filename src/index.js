import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { About } from './About';
import { Work } from './Work';
import { Contact } from './Contact';
import {Home} from './Home'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="work" element={<Cards />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

