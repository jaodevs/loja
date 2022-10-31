import './Cadastro.css'
import Nav2 from '../../components/Navbar2'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios, { Axios } from 'axios';



const validation = yup.object().shape({
    Nomeproduto: yup.string().required("Nome do produto é obrigatório"),
    categoria: yup.string().required("Categoria é obrigatório"),
    Tamanho: yup.string().required("Tamanho é obrigatório"),
    Peso: yup.string().required("Peso é obrigatório"),
    Cor: yup.string().required("Cor é obrigatório"),
    Pnp: yup.string().required("Campo obrigatório"),
    RGB: yup.string().required("Campo obrigatório"),
    bluetooth: yup.string().required("Campo obrigatório"),})






function Perifericos(){
    const { register, handleSubmit, formState: {errors}  } = useForm({
        resolver: yupResolver(validation)
        
    })

    const onSub = data => axios.post("http://localhost:3001/perifericos", data)



    return(
        <div>
            <Nav2/>
            <main>
            
            <h1>Cadastro de Perifericos</h1>
            
            <form onSubmit={handleSubmit(onSub)}>
            <label>Nome do produto</label>
                <input type="text" name="Nome do produto" {...register("Nomeproduto")}/>
                <p className="error-message">{errors.Nomeproduto?.message}</p>


                <label>Categoria</label>
                <select type="text"{...register("categoria")}>
                <option value="" ></option>
            
                <option value="Monitor">Monitor</option>
                <option value="Teclado">Teclado</option>
                <option value="Mouse">Mouse</option>
                </select>
                <p className="error-message">{errors.categoria?.message}</p>


                <h1>Informações Tecnicas</h1>
                <table>
                <tr>
                    <th>Tamanho</th>
                    <td><input type="text" name="Tamanho" {...register("Tamanho")}/><p className="error-message">{errors.Tamanho?.message}</p></td>
                </tr>
                <tr>
                    <th>Peso</th>
                    <td><input type="text" name="Peso" {...register("Peso")}/> <p className="error-message">{errors.Peso?.message}</p></td>
                </tr>
                <tr>
                    <th>Cor</th>
                    <td><input type="text" name="Cor" {...register("Cor")}/><p className="error-message">{errors.Cor?.message}</p></td>
                </tr>
                <tr>
                <th>plug and play</th>
                <td><select type="text"{...register("Pnp")}>
                        <option value=""></option>
                        <option value="Sim">Sim</option>
                        <option value="Nao">Nao</option>
                        </select><p className="error-message">{errors.Pnp?.message}</p></td>
                </tr>
                <th>Tem RGB</th>
                <td><select type="text"{...register("RGB")}>
                        <option value=""></option>
                        <option value="Sim">Sim</option>
                        <option value="Nao">Nao</option>
                        </select><p className="error-message">{errors.RGB?.message}</p></td>
                        
                <tr>
                <th>Tem bluetooth</th>
                <td><select type="text"{...register("bluetooth")}>
                        <option value=""></option>
                        <option value="Sim">Sim</option>
                        <option value="Nao">Nao</option>
                        </select><p className="error-message">{errors.bluetooth?.message}</p></td>
                </tr>

                </table>
        
                <input type="submit" />
            </form>
            </main>
        </div>
        
    )
}

export default Perifericos