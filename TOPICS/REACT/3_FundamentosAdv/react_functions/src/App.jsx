import './App.css'
import night from "./assets/lamp.jpg"
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'


function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>React Av</h1>
      {/* Imagem em assests */}
      <img src={night} alt="Imagem aqui"/>

      <Data></Data>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name="Pablo"/>
      <CarDetails brand="VW" km={999} color="Vermelho"></CarDetails>
    </div>
  )
}

export default App
