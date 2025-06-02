import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';

function App() {

// Hierarquia


// teste
  return (
      <div className="App">
        <h1>Fundamentos React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
        {/* comentário */}
      </div>
  );
}

export default App
