import { Search } from "./components/Search";
import { useState, useEffect} from "react";
import { List } from "./components/List";
import  styles  from "./App.module.css";


function App() {
  const [person, usePerson] = useState([]);
  const [busqueda, useBusqueda] = useState("");


  const filterData = (searchTerm) =>{
  useBusqueda(searchTerm);
  }
  
    const filteredData = person.filter(persona => 
      
      persona.name.first.toLowerCase().includes(busqueda.toLowerCase()) ||
      persona.name.last.toLowerCase().includes(busqueda.toLowerCase()) ||
      persona.location.city.toLowerCase().includes(busqueda.toLowerCase()) ||
      persona.location.country.toLowerCase().includes(busqueda.toLowerCase())  
     
      
    );
    

      
     
      
      
        
    



    useEffect(() => {

        const peticionApi = async () => {
            const request = await fetch("https://randomuser.me/api?results=50")
            const data = await request.json();
            const persons = await data.results;
            usePerson(persons);
        }
        peticionApi();


    }, [])

  return <div className={styles.content}>
    <div className={styles.cellphone}>
        <Search filterData={filterData}/>
        <List filteredData={filteredData}/>
    </div>
    
  </div>

}

export default App
