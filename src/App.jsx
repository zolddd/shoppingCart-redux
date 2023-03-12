import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Provider store={store}>
    <h1>redux</h1>
    <ShoppingCart/>
   </Provider>
  )
}

export default App
