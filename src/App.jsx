import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';



function App() {
  const [count, setCount] = useState(0)
  const [monsties, setmonsties] = useState([])
  const [monstie, setmonstie] = useState({})

//Carga los registros almacenados en localStore
useEffect(()=>{
  const getLocalStore = ()=>{
    const monstieLocalStore = JSON.parse(localStorage.getItem('monsties'))

    setmonsties(monstieLocalStore)
  }
  getLocalStore()
}, [])

//Escribe y actualiza el localStore
useEffect(()=>{
  localStorage.setItem('monsties', JSON.stringify(monsties))

}, [monsties])

const deleteMonstie = (id) =>{
    const monstieAfterDelete = monsties.filter(
      monstie=> monstie.id !== id
    )
    setmonsties(monstieAfterDelete)
  }
  

  return (
    <div className="App container h-screen">
      <Header/>
      <div className="flex mt-12  xs:flex-col  md:flex-row">
        <Form
          monsties = {monsties}
          setmonsties = {setmonsties}
          monstie = {monstie}
          setmonstie = {setmonstie}
        />
        <List
          monsties = {monsties}
          setmonstie = {setmonstie}
          deleteMonstie = {deleteMonstie}
        />
      </div>

    </div>
  )
}

export default App
