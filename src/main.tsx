import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import App from './App'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import './Main.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>


    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/app' element={<App/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

  </BrowserRouter>,
)
