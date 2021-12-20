import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Form from './components/Form';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)
  const [monsties, setmonsties] = useState([])

  return (
    <div className="App container h-screen">
      <Header/>
      <Form
        monsties = {monsties}
        setmonsties = {setmonsties}
      />
      

    </div>
  )
}

export default App
