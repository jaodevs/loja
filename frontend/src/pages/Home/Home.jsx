import Example from "../../components/navbar";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';



function Home() {
  const [onSubmit, setonSubmit] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/eletronicos")

      .then((response) => {
        setonSubmit(response.data);
      })
      .catch(() => {});
  }, []);

  function onSubmitdelete(id) {
    axios.delete(`http://localhost:3001/eletronicos/${id}`);

    setonSubmit(onSubmit.filter((onSubmit) => onSubmit._id !== id));
  }
  




  /***************************************************************************************/
  const [onSub, setonSub] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/perifericos")

      .then((response) => {
        setonSub(response.data);
      })
      .catch(() => {});
  }, []);

 
  function delet(id) {
    Swal.fire({
        title: 'Você deseja excluir o arquivo? Após a exclusão não será possível recuperar o arquivo.',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        denyButtonText: `Manter arquivo`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Item Excluido!', '', 'success');
            onSubdelete(id);
            onSubmitdelete(id);
        } else if (result.isDenied) {
            Swal.fire('Arquivo salvo', '', 'info')
        }
    })
}


  
  function onSubdelete(id) {
    axios.delete(`http://localhost:3001/perifericos/${id}`);

    setonSub(onSub.filter((onSub) => onSub._id !== id));



    
  }

  return (
    <div>
    
      <Example />
      
      
      <div>
    
        <h1>Produtos</h1>
      </div>

      <main>
        <div className="form1">
          {onSubmit.map((onSubmit, key) => {
            return (
              <div className="card1" key={key}>
                <h1>Eletrônicos</h1>

                <table border="1px">
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
                    <Link onClick={() => delet(onSubmit._id)}>
                      <button>Delete</button>
                    </Link>
                  </div>
                  <div className="btn-edit">
                    <Link to={{ pathname: `/eletronicosedit/${onSubmit._id}` }}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="form2">
          {onSub.map((onSub, key) => {
            return (
              <div className="card2" key={key}>
                <h1>Periféricos</h1>

                <table border="1px">
                  <thead>
                    <tr>
                      <th colspan="6">{onSub.Nomeproduto}</th>
                    </tr>
                    <tr>
                      <th colspan="6">{onSub.categoria}</th>
                    </tr>
                  </thead>

                  <tr>
                    <th>Tamanho</th>
                    <th>Peso</th>
                    <th>Cor</th>
                    <th>plug and play</th>
                    <th>Tem RGB</th>
                    <th>Tem bluetooth</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>{onSub.Tamanho}</td>
                      <td>{onSub.Peso}</td>
                      <td>{onSub.Cor}</td>
                      <td>{onSub.Pnp}</td>
                      <td>{onSub.RGB}</td>
                      <td>{onSub.bluetooth}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="btns">
                  <div className="btn-delete">
                    <Link onClick={() => delet(onSub._id)}>
                      <button> Delete</button>
                    </Link>
                  </div>
                  <div className="btn-edit">
                    <Link to={{ pathname: `/perifericosedit/${onSub._id}` }}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
