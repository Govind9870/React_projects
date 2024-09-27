
import './App.css'
import Card from './componants/Card'
import Button from './componants/Button'

function App() {
  const[count, setCount] = useSate(0);

  function handleclick() {
    setCount(count+1);
  }

  return (
    <div>
     <Button incrementCount={handleclick} 
     text="click Me">
      <h1>{count}</h1>
      </Button>
      
      {/* <Card name="Govind jaiswal">
        <h1>Best Course for WEB DEV</h1>
        <p>Trying to be complete this course</p>
        <p>Will complete the course as soon as possiable</p>
      </Card>
      <Card children="main ak children hu">
        hello jee kese ho saare
      </Card> */}
    </div>
  )
}

export default App
