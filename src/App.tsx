import { useState, useEffect} from 'react'

import './styles/style.css'
import axios from 'axios'
import Apicomp from './components/Apicomp'
import Head from './components/Head'
import Card from './components/Card'




function App() {
 
  const baseurl = "https://app.ftoyd.com/fronttemp-service";
  const fronts = "/fronttemp";
  const [apiData, setApiData] = useState([]);

 
  
  function fetchData() {
    axios.get(baseurl + fronts)
      .then((res) => {
        setApiData(res.data.data.matches);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <>
    <div className='flex-box'>
      <Head fetchData={fetchData}/>
      <Apicomp/>
      {apiData && apiData.map((item, index) => (
          <Card 
            key={index}
            leftScore={Number(item.awayScore)} 
            rightScore={Number(item.homeScore)} 
            Command1={String(item.awayTeam.name)} 
            Command2={String(item.homeTeam.name)}
            status={String(item.status)}
          />
        ))}
        {!apiData && <p>Загрузка данных...</p>} 
    </div>
    </>
  )
}

export default App
