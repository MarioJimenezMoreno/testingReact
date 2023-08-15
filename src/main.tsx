import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import App from './App'
import Profile from './Profile'
import './Main.css'
import './style.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
      <main className="dark text-foreground bg-background">

    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/app' element={<App/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

      </main>
  </BrowserRouter>,
)
