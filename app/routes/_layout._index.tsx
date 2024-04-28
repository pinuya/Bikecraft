import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { bikcraft, bikeDetailsIcons, introducao } from "assets/img";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bikcraft - Bicicletas Elétricas" },
    {
      name: "description",
      content:
        "Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <main className="introducao-bg">
        <div className="container introducao">
          <div className="introducao-conteudo">
            <h1 className="font-1-xxl ">
              Bicicletas feitas sob medida<span>.</span>
            </h1>
            <p className="font-2-l ">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <Link className="botao" to="./bicicletas.html">
              Escolha a sua!
            </Link>
          </div>
          <div>
            <img
              // className="fadeInDown"

              src={introducao}
              alt="Bicicleta elétrica preta."
              // data-anime="800"
            />
          </div>
        </div>
      </main>

      <article className="bicicletas-lista">
        <h2 className="container font-1-xxl">
          escolha a sua<span>.</span>
        </h2>
        <ul>
          <li>
            <Link to="./bicicletas/magic.html">
              <img
                src="./assets/img/bicicletas/magic-home.jpg"
                alt="Bicicleta preta"
              />
              <h3 className="font-1-xl">Magic Night</h3>
              <span className="font-2-m">R$ 2.499,00</span>
            </Link>
          </li>

          <li>
            <Link to="./bicicletas/magic.html">
              <img
                src="./assets/img/bicicletas/nimbus-home.jpg"
                alt="Bicicleta preta"
              />
              <h3 className="font-1-xl">Nimbus Stark</h3>
              <span className="font-2-m">R$ 4.999,00</span>
            </Link>
          </li>

          <li>
            <Link to="./bicicletas/magic.html">
              <img
                src="./assets/img/bicicletas/nebula-home.jpg"
                alt="Bicicleta preta"
              />
              <h3 className="font-1-xl">Nebula Cosmic</h3>
              <span className="font-2-m">R$ 5.999,00</span>
            </Link>
          </li>
        </ul>
      </article>

      <article className="tecnologia-bg">
        <div className="container tecnologia">
          <div className="tecnologia-conteudo">
            <span className="font-2-l-b cor-5">Tecnologia Avançada</span>
            <h2 className="font-1-xxl cor-0">
              Você escolhe as suas cores e componentes
              <span className="cor-p1">.</span>
            </h2>
            <p className="font-2-l cor-5">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <Link className="link cor-5" to="biciletas.html">
              Escolha um modelo
            </Link>

            <div>
              <img
                src={bikeDetailsIcons.engine}
                alt="ícone de bicicleta elétrica"
              />
              <h3 className="font-1-m cor-0">Motor elétrico</h3>
              <p className="font-2-s cor-5">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar
              </p>
            </div>
            <div className="tecnologia-vantagens">
              <div>
                <img
                  src={bikeDetailsIcons.tacker}
                  alt="ícone de bicicleta elétrica"
                />
                <h3 className="font-1-m cor-0">Rastreador</h3>
                <p className="font-2-s cor-5">
                  Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                  rastreadores e sistemas anti-furto para garantir o seu
                  sossego.
                </p>
              </div>
            </div>
          </div>
          <div className="tecnologia-imagem">
            <img
              src="./assets/img/fotos/tecnologia.jpg"
              alt="Imagem decorativa."
            />
          </div>
        </div>
      </article>

      <section className="parceiros" aria-label="Nossos Parceiros">
        <h2 className="container font-1-xxl">
          nossos parceiros<span>.</span>
        </h2>
        <ul>
          <li>
            <img src="./assets/img/parceiros/caravan.svg" alt="caravan" />
          </li>
          <li>
            <img src="./assets/img/parceiros/ranek.svg" alt="ranek" />
          </li>
          <li>
            <img src="./assets/img/parceiros/handel.svg" alt="handel" />
          </li>
          <li>
            <img src="./assets/img/parceiros/dogs.svg" alt="dogs" />
          </li>
          <li>
            <img src="./assets/img/parceiros/lescone.svg" alt="lescone" />
          </li>
          <li>
            <img src="./assets/img/parceiros/flexblog.svg" alt="flexblog" />
          </li>
          <li>
            <img src="./assets/img/parceiros/wildbeast.svg" alt="wildbeast" />
          </li>
          <li>
            <img src="./assets/img/parceiros/surfbot.svg" alt="surfbot" />
          </li>
        </ul>
      </section>
      <section className="depoimento" aria-label="depoimento">
        <div>
          <img src="./assets/img/fotos/depoimento.jpg" />
        </div>
        <div className="depoimento-conteudo">
          <blockquote className="font-1-xl cor-p5">
            <p>
              Ana Júlia: Pedalar sempre foi a minha paixão, o que o pessoal da
              Bikcraft fez foi intensificar o meu amor por esta atividade.
              Recomendo à todos que amo.
            </p>
          </blockquote>
          <span className="font-1-m-b cor-p4">Ana Júlia</span>
        </div>
      </section>

      <article className="seguros-bg">
        <div className="seguros container">
          <h2 className="font-1-xxl cor-0">
            seguros<span className="cor-p1">.</span>
          </h2>

          <div className="seguros-item">
            <h3 className="font-1-xl cor-6">PRATA</h3>
            <span className="font-1-xl cor-0">
              R$ 199<span className="font-1-xs cor-6">mensal</span>
            </span>
            <ul className="font-2-m cor-0">
              <li>Duas trocas p/ ano.</li>
              <li>Assistência técnica.</li>
              <li>Suporte 08h às 18h.</li>
              <li>Cobertura estadual.</li>
            </ul>
            <Link className="botao secundario" to="./orcamento.html>">
              Inscreva-se
            </Link>
          </div>

          <div className="seguros-item">
            <h3 className="font-1-xl cor-p1">OURO</h3>
            <span className="font-1-xl cor-0">
              R$ 299<span className="font-1-xs cor-6">mensal</span>
            </span>
            <ul className="font-2-m cor-0">
              <li>Cinco trocas p/ ano.</li>
              <li>Assistência especial.</li>
              <li>Suporte 24h.</li>
              <li>Cobertura nacional.</li>
              <li>Acesso ao Clube Bikcraft.</li>
            </ul>
            <Link className="botao" to="./orcamento.html>">
              Inscreva-se
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
