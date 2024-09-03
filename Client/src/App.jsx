import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/submit-number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: count }), // Send the number to the server
      });
  
      if (response.ok) {
        const data = await response.text();
        console.log(data); // Should log "Number saved to database"
        setCount(""); // Clear the input field after submitting
      } else {
        console.error('Error submitting number:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  
    // const data = await response.text();
    // console.log(data); // Log the response from the server
    // setCount(""); // Clear the input
  };
  
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        {count}
        </button>
      </div>
    <div className='grid-container'>
      <button onClick={() => setCount((count) => count + "1")} className='grid-item'>1</button>
      <button onClick={() => setCount((count) => count + "2")} className='grid-item'>2</button>
      <button onClick={() => setCount((count) => count + "3")} className='grid-item'>3</button>
      <button onClick={() => setCount((count) => count + "4")} className='grid-item'>4</button>
      <button onClick={() => setCount((count) => count + "5")} className='grid-item'>5</button>
      <button onClick={() => setCount((count) => count + "6")} className='grid-item'>6</button>
      <button onClick={() => setCount((count) => count + "7")} className='grid-item'>7</button>
      <button onClick={() => setCount((count) => count + "8")} className='grid-item'>8</button>
      <button onClick={() => setCount((count) => count + "9")} className='grid-item'>9</button>
      <button className='grid-item'></button>
      <button onClick={() => setCount((count) => count + "0")} className='grid-item'>0</button>
      <button className='grid-item'></button>
    </div>
    <button onClick={handleSubmit}>Enter</button>
    <button onClick={() => setCount((count) => count = "")} >Clear</button>
    <button onClick={() => setCount((count) => count.slice (0, -1))}>Backspace</button>
    <div>
      </div>
    </>
  )
}

export default App
