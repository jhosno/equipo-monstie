import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';



function App() {
  const [count, setCount] = useState(0)
  const [monsties, setmonsties] = useState([])

  return (
    <div className="App container h-screen">
      <Header/>
      <div className="flex mt-12  xs:flex-col  md:flex-row">
        <Form
          monsties = {monsties}
          setmonsties = {setmonsties}
        />
        <List
          monsties = {monsties}
        />
      </div>

    </div>
  )
}

export default App
