import { useEffect, useState } from 'react'
import './App.css'

// custom hook
const useLocalStorage = (key, defaultValue = '') => {

  const [state, setState] = useState(() => localStorage.getItem(key) || defaultValue)

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [state])
  return [state, setState]
}

const App = () => {

  // use the custom hook
  const [name, setName] = useLocalStorage('name')

  // const getInitialState = () => {
  //   console.log('get initial state')
  //   return localStorage.getItem('name') || ''
  // }

  // by passing a function to useState (lazy initializer) we make sure this is only called
  // once

  const handleChange = e => setName(e.target.value)




  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        <input type="text" onChange={handleChange} />
      </header>
    </div>
  )
}

export default App
