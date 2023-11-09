import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Ternary from './Ternary.jsx'
// import Mapping from './AddItem'
// import Like from './Flipping-object-values'
// import Meme from './React-state-objects'
// import Counter from './Counter-state'
// import BoxesGrid from './Passing_data/Boxes_grid'
import DisplayJoke from './Passing_data/Jokes-displayer'
import './App.css'
// import './index.css'

// try each component from top to bottom to revise this sh*t
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ternary /> */}
    {/* <Mapping /> */}
    {/* <Like /> */}
    {/* <Meme /> */}
    {/* <Counter /> */}
    {/* <BoxesGrid /> */}
    <DisplayJoke />
  </React.StrictMode>,
)
