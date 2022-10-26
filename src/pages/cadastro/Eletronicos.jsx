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
                <div className="line-post"></div>

                <form  onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="Nome pet" {...register("Nomepet")}
                            />

                </form>
                

                




            </main>
        </div>

        

    )
}

export default Eletronicos