import React from 'react'
import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react'

const App = () => {

  const [results, setResults] = useState([])
  

  const fetchPost = async () => {
    const response = await fetch(process.env.REACT_APP_BASE_URL)
    .then(response => response.json())
    return response
  }
  
  useEffect(() => {
    fetchPost().then(response => setResults(response))
  }, [])

  return (
    <div className='App'>
      <h1>Api Testing</h1>

      <Card results={results}/>
    </div>
  )
}

export default App
