import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Header></Header>
      <h2>sdas</h2>
      holis
    </div>
  )
}

export default App
