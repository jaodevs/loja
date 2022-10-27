import Nav2 from '../../components/Navbar2'
import './Cadastro.css'
import {useForm} from 'react-hook-form'



function Eletronicos (){
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);


    return(
        <div>
            <Nav2/>
            <main>
                <h1>Cadastro de Produtos Eletronicos</h1>
                

                <label>Nome do produto</label>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="Nome do produto" {...register("Nomeproduto")}/>

                <label>Categoria</label>
                <select type="text"{...register("cateregoria")}>
                <option value=""></option>
                <option value="Smartphones">Smartphone</option>
                <option value="Notebooks">Notebook</option>
                <option value="Tablets">Tablet</option>
                <option value="Monitores">Monitore</option>
                <option value="Teclados">Teclado</option>
                <option value="Mouse">Mous</option>
                </select>
                

                </form>
                

                




            </main>
        </div>

        

    )
}

export default Eletronicos