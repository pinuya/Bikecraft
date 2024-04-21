import { Link } from "@remix-run/react";

export default function Bicicletas() {
  return (
    <div>
      <main>
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-2-l-b cor-5">Escolha a melhor para você</p>
            <h1 className="font-1-xxl cor-0">
              nossas bicicletas<span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="bicicletas container ">
          <div className="bicicletas-imagem">
            <img
              src="./assets/img/bicicletas/nimbus.jpg"
              alt="Bicicleta preta"
            />
            <span className="font-2-m cor-0">R$ 4999</span>
          </div>
          <div className="bicicletas-conteudo">
            <h2 className="font-1-xl">Nimbus Stark</h2>
            <p className="font-2-s cor-8">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <ul className="font-1-m cor-8">
              <li>
                <img src="./assets/img/icones/eletrica.svg" alt="" />
                Motor Elétrico
              </li>
              <li>
                <img src="./assets/img/icones/carbono.svg" alt="" />
                Fibra de Carbono
              </li>
              <li>
                <img src="./assets/img/icones/velocidade.svg" alt="" />
                50 km/h
              </li>
              <li>
                <img src="./assets/img/icones/rastreador.svg" alt="" />
                Rastreador
              </li>
            </ul>
            <Link className="botao seta" to="./bicicletas/nimbus.html">
              Mais Sobre
            </Link>
          </div>
        </div>

        <div className="bicicletas-bg">
          <div className="bicicletas container ">
            <div className="bicicletas-imagem">
              <img
                src="./assets/img/bicicletas/magic.jpg"
                alt="Bicicleta preta"
              />
              <span className="font-2-m cor-0">R$ 3999</span>
            </div>
            <div className="bicicletas-conteudo">
              <h2 className="font-1-xl cor-0">Magic Might</h2>
              <p className="font-2-s cor-5">
                A Magic Might é a melhor Bikcraft já criada pela nossa equipe.
                Ela vem equipada com os melhores acessórios, o que garante maior
                velocidade.
              </p>
              <ul className="font-1-m cor-5">
                <li>
                  <img src="./assets/img/icones/eletrica.svg" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./assets/img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./assets/img/icones/velocidade.svg" alt="" />
                  45 km/h
                </li>
                <li>
                  <img src="./assets/img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Link className="botao seta" to="./bicicletas/magic.html">
                Mais Sobre
              </Link>
            </div>
          </div>
        </div>

        <div className="bicicletas container ">
          <div className="bicicletas-imagem">
            <img
              src="./assets/img/bicicletas/nebula.jpg"
              alt="Bicicleta preta"
            />
            <span className="font-2-m cor-0">R$ 2999</span>
          </div>
          <div className="bicicletas-conteudo">
            <h2 className="font-1-xl">Nebula Cosmic</h2>
            <p className="font-2-s cor-8">
              A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <ul className="font-1-m cor-8">
              <li>
                <img src="./assets/img/icones/eletrica.svg" alt="" />
                Motor Elétrico
              </li>
              <li>
                <img src="./assets/img/icones/carbono.svg" alt="" />
                Fibra de Carbono
              </li>
              <li>
                <img src="./assets/img/icones/velocidade.svg" alt="" />
                50 km/h
              </li>
              <li>
                <img src="./assets/img/icones/rastreador.svg" alt="" />
                Rastreador
              </li>
            </ul>
            <Link className="botao seta" to="./bicicletas/nebula.html">
              Mais Sobre
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
