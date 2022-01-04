import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 25, "2"),
    new Cliente("Carlos", 29, "3"),
    new Cliente("Gabi", 27, "1"),
    new Cliente("Rafael", 27, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluido... ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  function novoCliente() {
    // setando cliente vazio
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              {/*justify-end coloca o botao no lado direito */}
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
