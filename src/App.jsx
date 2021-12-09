import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Form from './components/Form';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container h-screen">
      <Header/>
      <Form/>

    </div>
  )
}

export default App
