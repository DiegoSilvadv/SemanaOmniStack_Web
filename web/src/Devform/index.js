import React, {useState, useEffect} from 'react';

function Devform({onSubmit}){

    //criando um useState para latitude e longitude e preenchendo valor do state mas não esta sendo usado
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    //criando estados para o resto dos campos
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    

    // navigator.geolocation.getCurrentPosition funcção usada para permitir a localização do usuari
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        //pegando a latitude e longitude do user
        const {latitude, longitude} = position.coords;

        //setLatitude, setLongitude atualiza os valores do estado e processa o HTML
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout:30000,
      },
    )

  },[]);

  async function handleSubmit(e){
    e.preventDefault();
     await onSubmit({
        github_username,
        techs,
        latitude,
        longitude,
      });

      setGithubUsername('');
      setTechs('');
  }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_ursername">Usuário do Github</label>
          <input
           name="github_ursername" 
           id="github_ursername" 
           required
           value={github_username}
           onChange={e => setGithubUsername(e.target.value)}
           ></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
          name="techs" 
          id="techs" 
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
          >
          </input>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
             type="number" 
             name="latitude" 
             id="latitude" 
             required value={latitude} 
             onChange={e => setLatitude(e.target.value)} ></input>
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required value={longitude}
            onChange={e => setLongitude(e.target.value)} ></input>  
         </div>
      </div>

       <button type="submit">Salvar</button>
      </form>
    );
}

export default Devform;