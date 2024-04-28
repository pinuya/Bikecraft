import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { findBikeById } from "~/db";

export const loader = (args: LoaderFunctionArgs) => {
  const id = args.params.id;

  const foundBike = findBikeById(id);

  if (!foundBike) {
    throw new Error("Not Found");
  }

  return {
    bike: foundBike,
  };
};

export default function DetailsBike() {
  const { bike } = useLoaderData<typeof loader>();

  return (
    <div>
      <main className="titulo-bg">
        <div>
          <div className="titulo container">
            <p className="font-2-xl cor-5">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(bike.price)}
            </p>
            <h1 className="font-1-xxl cor-0">
              {bike.name}
              <span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="bicicleta container">
          <div className="bicicleta-imagens">
            {bike.gallery.map((picture) => {
              return <img src={picture} alt="" />;
            })}
          </div>

          <div className="bicicleta-conteudo">
            <p className="font-2-l cor-5">{bike.description}</p>
            <div className="bicicleta-comprar">
              <a
                className="botao "
                href="../orcamento.html?tipo=bikcraft&produto=nimbus"
              >
                Comprar Agora
              </a>
              <span className="font-1-xs cor-6">
                <img src="../assets//img/icones/entrega.svg" />
                Entrega em até {bike.deadline} dias úteis.
              </span>

              <span className="font-1-xs cor-6">
                <img src="../assets//img/icones/estoque.svg" />
                {bike.stock} em estoque.
              </span>
            </div>

            <h2 className="font-1-xs cor-0">Informações</h2>
            <ul className="bicicleta-informacoes">
              {bike.infos.map((info) => {
                return (
                  <li>
                    <img src={info.icon} />
                    <h3 className="font-1-m cor-0">{info.title}</h3>
                    <p className="font-2-xs cor-5">{info.description}</p>
                  </li>
                );
              })}
            </ul>

            <h2 className="font-1-xs cor-0">Ficha Técnica</h2>
            <ul className="bicicleta-ficha font-2-s cor-0">
              {bike.dataSheet.map((data) => {
                return (
                  <li>
                    {data.title} <span>{data.description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>

      <article className="bicicletas-lista container">
        <h2 className="container font-1-xxl">
          escolha a sua<span>.</span>
        </h2>
        <ul>
          <li>
            <a href="./magic.html">
              <img
                src="../assets/img/bicicletas/magic.jpg"
                alt="Bicicleta preta"
              />
              <h3 className="font-1-xl">Magic Night</h3>
              <span className="font-2-m">R$ 2.499,00</span>
            </a>
          </li>

          <li>
            <a href="./nebula.html">
              <img
                src="../assets/img/bicicletas/nebula.jpg"
                alt="Bicicleta preta"
              />
              <h3 className="font-1-xl">Nebula Cosmic</h3>
              <span className="font-2-m">R$ 5.999,00</span>
            </a>
          </li>
        </ul>
      </article>

      <article className="seguro-bg">
        <div className="seguro container">
          <div className="seguro-imagem">
            <img src="../assets/img/fotos/seguros.jpg" />
          </div>
          <div className="seguro-conteudo">
            <h2 className="font-1-xxl cor-0">
              Pedale mais tranquilo com o nosso
              <span className="cor-p1">seguro.</span>
            </h2>
            <p className="font-2-l cor-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              dicta corrupti excepturi similique quae molestias, saepe et
              distinctio corporis ducimus magnam officia obcaecati non quia. Ut
              reiciendis placeat porro ipsa.
            </p>
            <a className="botao" href="../seguros.html">
              Conheça Mais
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
