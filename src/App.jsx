import { useState } from 'react'

function App() {
  const [userInput,setuserInput]=useState('');
  const API_KEY=import.meta.env.VITE_GEMINII_KEY;
  const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

async function Responding()
{
  const response=await fetch(GEMINI_URL,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      contents:[{
        parts:[{
          text: userInput
        }]
      }]
    })
  })
  const res=await response.json();
  const output =
  res.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(res);
  console.log(output);
}

  return (
   <div>
    <h1>ChatBot</h1>
    <input type="text" onChange={event=>setuserInput(event.target.value)} placeholder="Describe what to know" />
    <button onClick={Responding}></button>
   </div>
  )
}

export default App
