import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let nombre = ["A", "B"];

  return (
    <>
        <Navbar></Navbar>
        <div>
            <Card name="Soy una prop"></Card>
        </div>
    </>
  )
}

export default App