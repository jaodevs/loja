import "./Seach.css"
import axios from "axios";
import {GoSearch} from 'react-icons/go';
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";





function Search (){

    const [onSubmit, setonSubmit] = useState([]);
    const [categoria, setcategoria ] = useState("")




  useEffect(() => {
    axios
      .get("http://localhost:3001/eletronicos")

      .then((response) => {
        setonSubmit(response.data);
      })
      .catch(() => {});
  }, []);



    
    

    function handleSearchDescription(e) {
        e.preventDefault();
        axios.get(`http://localhost:3001/eletronicos${Nomeproduto? ` Nomeproduto=${Nomeproduto}` : ""}`)
            .then(res => {
                setonSubmit(res.data);
            })}



  
    



    return(
        <div className='search' >
        <div className='searchInputs' onSubmit={handleSearchDescription}>
            
            <IconContext.Provider value={{color: "#B8B8B8", size:"25"}}>
            <GoSearch/>
            <input value={categoria} onChange={(e) => setcategoria (e.target.value)} type="text"
             placeholder='Pesquisar...'/>
            </IconContext.Provider>
            <p>{onSubmit.Nomeproduto}</p>

        </div>
     
               


        
    </div>

    )
}


export default Search;