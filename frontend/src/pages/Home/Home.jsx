
import Example from "../../components/navbar"
import "./Home.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



 function Home ( ){
    const [onSubmit, setonSubmit] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/eletronicos")
        
        .then((response) => {
            setonSubmit(response.data)
   
   
         })
         .catch(() => {
          
   
         })
     }, [])
     
    function onSubmitdelete (id){

    axios.delete(`http://localhost:3001/eletronicos/${id}`)
  
  
    setonSubmit(onSubmit.filter(onSubmit => onSubmit._id !== id))
  
  }


    // const [onSub, setonSub] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:3001/perifericos")
        
    //     .then((response) => {
    //        setonSub(response.data)
  
  
    //     })
    //     .catch(() => {
    //       console.log("Deu errrado")
  
    //     })
    // }, [])





    return(
        <div>
            <Example/>
            <main>
            <div className="form1" >
            {onSubmit.map((onSubmit, key) => {
                return(

                <div className="card1" key={key}>
           
      
                    <h1>Eletrônicos</h1>
                    <table  border="1px">
                    <thead>
                        <tr>
                            <th colspan="7">{onSubmit.Nomeproduto}</th>
                        </tr>
                        <tr>
                            <th colspan="7">{onSubmit.categoria}</th>
                        </tr>
                    </thead>
                       <tr>
                   
                        <th>Tamanho</th>
                        <th>Peso</th>
                        <th>Cor</th>
                        <th>Sistema operacional</th>
                        <th>Tem RGB</th>
                        <th>Tem bluetooth</th>
                        <th>Tem acesso wifi</th>
                       </tr>
                    
                       <tbody>

                        <tr>
                            
                            <td>{onSubmit.Tamanho}</td>
                            <td>{onSubmit.Peso}</td>
                            <td>{onSubmit.Cor}</td>
                            <td>{onSubmit.Sistemaoperacional}</td>
                            <td>{onSubmit.RGB}</td>
                            <td>{onSubmit.bluetooth}</td>
                            <td>{onSubmit.wifi}</td>
                        </tr>
                       </tbody>
                    </table>


                    <div className="btns">
                    <div className="btn-delete">
                        <Link onClick={() => onSubmitdelete(onSubmit._id) }>
                        <button>Delete</button>
                        </Link>
                    </div>
                    <div className="btn-edit">
                    <Link to={{pathname:`/eletronicosedit/${onSubmit._id}`}}>
                    <button>Edit</button>
                    </Link>
                    </div>
                    </div>
                    
                </div>
                            )})}
            


                </div>

                     
          
{/* 
                <div className="form2">
                    <h1>Periféricos</h1>




                    <div className="btns">
                    <div className="btn-delete">
                        <button> Delete</button>
                    </div>
                    <div className="btn-edit">
                    <button>Edit</button>
                    </div>
                    </div>
                </div>
      
       */}
                </main>
        </div>


    ) 
}
      
   



export default Home