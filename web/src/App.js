import React, {useState, useEffect} from 'react';
import './global.css';
import './app.css';
import './Sidebar.css';
import './main.css';
import './Services/api';
import api from './Services/api';
import Devitem from './Devitem/index';
import Devform from './Devform/index';

function App() {
  const [devs, setDevs] = useState([]);
  useEffect(()=>{
    async function LoadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    LoadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs', data)
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
       <Devform onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev =>(
            //passando propriedade para o index.js 'dev'
            //key={dev._id} indicador qual propriedade unica em cada dev
            <Devitem key={dev._id} dev={dev}/>
          ))}      
        </ul>

      </main>
    </div>






    
  );
}

export default App;



















































// Os 3 conceitos do react 
//componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//estado: Informções matidas pelo componetes(lembrete: imutabilidade)
//propriedade: Informções que o componente pai passa para o componente filho