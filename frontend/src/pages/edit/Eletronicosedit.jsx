import axios, { Axios } from "axios";
import Nav2 from "../../components/Navbar2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const validation = yup.object().shape({
  Nomeproduto: yup.string().required("Nome do produto é obrigatório"),
  categoria: yup.string().required("Categoria é obrigatório"),
  Tamanho: yup.string().required("Tamanho é obrigatório"),
  Peso: yup.string().required("Peso é obrigatório"),
  Cor: yup.string().required("Cor é obrigatório"),
  Sistemaoperacional: yup
    .string()
    .required("Sistema operacional é obrigatório"),
  RGB: yup.string().required("Campo obrigatório"),
  bluetooth: yup.string().required("Campo obrigatório"),
  wifi: yup.string().required("Campo obrigatório"),
});

function Eletronicosedit() {
  const { id } = useParams();

  let navigate = useNavigate();

  const onSubmit = (data) =>
    axios
      .patch(`http://localhost:3001/eletronicos/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation),
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/eletronicos/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);

  return (
    <div>
      <Nav2 />
      <main>
        <h1>Cadastro de Produtos Eletronicos</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome do produto</label>
          <input
            type="text"
            name="Nome do produto"
            {...register("Nomeproduto")}
          />
          <p className="error-message">{errors.Nomeproduto?.message}</p>

          <label>Categoria</label>
          <select type="text" {...register("categoria")}>
            <option value=""></option>
            <option value="Smartphone">Smartphone</option>
            <option value="Notebook">Notebook</option>
            <option value="Tablet">Tablet</option>
          </select>
          <p className="error-message">{errors.categoria?.message}</p>

          <h1>Informações Tecnicas</h1>
          <table>
            <tr>
              <th>Tamanho</th>
              <td>
                <input type="text" name="Tamanho" {...register("Tamanho")} />
                <p className="error-message">{errors.Tamanho?.message}</p>
              </td>
            </tr>
            <tr>
              <th>Peso</th>
              <td>
                <input type="text" name="Peso" {...register("Peso")} />{" "}
                <p className="error-message">{errors.Peso?.message}</p>
              </td>
            </tr>
            <tr>
              <th>Cor</th>
              <td>
                <input type="text" name="Cor" {...register("Cor")} />
                <p className="error-message">{errors.Cor?.message}</p>
              </td>
            </tr>
            <tr>
              <th>Sistema operacional</th>
              <td>
                <input
                  type="text"
                  name="Sistema operacional"
                  {...register("Sistemaoperacional")}
                />
                <p className="error-message">
                  {errors.Sistemaoperacional?.message}
                </p>
              </td>
            </tr>
            <th>Tem RGB</th>
            <td>
              <select type="text" {...register("RGB")}>
                <option value=""></option>
                <option value="Sim">Sim</option>
                <option value="Nao">Nao</option>
              </select>
              <p className="error-message">{errors.RGB?.message}</p>
            </td>

            <tr>
              <th>Tem bluetooth</th>
              <td>
                <select type="text" {...register("bluetooth")}>
                  <option value=""></option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Nao</option>
                </select>
                <p className="error-message">{errors.bluetooth?.message}</p>
              </td>
            </tr>
            <tr>
              <th>Tem acesso wifi</th>
              <td>
                <select type="text" {...register("wifi")}>
                  <option value=""></option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Nao</option>
                </select>
                <p className="error-message">{errors.wifi?.message}</p>
              </td>
            </tr>
          </table>

          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Eletronicosedit;
