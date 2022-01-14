import './App.css';
import Avatar from './Avatar';
import Contador from './Contador';
import Calculadora from './Calculadora';

function App() {
  return (
  <div>
          <h1>Ejemplo de los avatars</h1>
          <Avatar id="2" size="small" name="JSXlady" />
          <Avatar id="3" name="Layla" />
          <Avatar id="1" size="large" name="Emma" />
          <Avatar id="5" />
          <br/>
          <Contador/>
          <br/>
          <Calculadora elemento1="3" elemento2="5"/>
  </div>

  );
}

export default App;
