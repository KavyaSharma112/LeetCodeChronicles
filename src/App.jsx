import React, {useEffect, useState} from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ReactDOM from 'react-dom/client';


const App = () => {

  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect (()=> {
    localStorage.setItem('currentTheme', theme);
    }, [theme])

  return (
    <div className = {`container ${theme}`}>
      <Navbar theme = {theme} setTheme={setTheme}/>
      <Hero/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;