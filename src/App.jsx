import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Header/>

    </div>
  )
}

export default App
