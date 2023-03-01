import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='heading'>Hello World</h1>
      <button className='btn btn-primary'>Primary</button>
      <button className='btn btn-success'>Success</button>
      <button className='btn btn-info'>Info</button>
      <button className='btn btn-warning'>Warning</button>
      <button className='btn btn-secondary'>Secondary</button>
      <br />
      <button className='btn btn-outlined-primary'>Primary</button>
      <button className='btn btn-outlined-success'>Success</button>
      <button className='btn btn-outlined-info'>Info</button>
      <button className='btn btn-outlined-warning'>Warning</button>
      <button className='btn btn-outlined-secondary'>Secondary</button>
      <br />
      <button className='btn btn-link-primary'>Primary</button>
      <button className='btn btn-link-success'>Success</button>
      <button className='btn btn-link-info'>Info</button>
      <button className='btn btn-link-warning'>Warning</button>
      <button className='btn btn-link-secondary'>Secondary</button> 
      <br />
      <input placeholder='Name' />    
      <br />
      <div className="card">
        <h1 className="card-title">Hello</h1>
        <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates dolore architecto fugit tempora expedita maxime ipsum ratione accusantium nobis.</p>
        </div> 
    </div>
  )
}

export default App
