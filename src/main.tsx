import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import App from './App';
import Profile from './Profile';
import './Main.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppWrapper() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <main className={`text-foreground bg-background ${theme}`}>
        <Routes>
          <Route path='/' element={<MainPage onThemeChange={handleThemeChange} />} />
          <Route path='/app' element={<App />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);