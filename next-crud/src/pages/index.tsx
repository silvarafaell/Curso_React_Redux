import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

    const clientes = [
        new Cliente('Ana', 34, '1'),
        new Cliente('Bia', 25, '2'),
        new Cliente('Carlos', 29, '3'),
        new Cliente('Gabi', 27, '1'),
        new Cliente('Rafael', 27, '4'),
    ]

  return (
      <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
           <Tabela clientes={clientes}></Tabela>
        </Layout>
    </div>
  )
}
