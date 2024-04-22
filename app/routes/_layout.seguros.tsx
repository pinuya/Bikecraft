export default function Seguros() {
  return (
    <div>
      <main className="vantagens-bg">
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-2-l-b cor-5">Escolha o seguros</p>
            <h1 className="font-1-xxl cor-0">
              vantagens<span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="seguros container">
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
            <a
              className="botao secundario"
              href="./orcamento.html?tipo=seguro&produto=prata"
            >
              Inscreva-se
            </a>
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
            <a
              className="botao"
              href="./orcamento.html?tipo=seguro&produto=ouro"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </main>

      <article className="vantagens-bg">
        <div className="vantagens">
          <h2 className="font-1-xxl cor-0">
            vantagens<span className="cor-p1">.</span>
          </h2>
          <ul>
            <li>
              <img src="./assets/img/icones/eletrica.svg" />
              <h3 className="font-1-l cor-0">Reparo Elétrico</h3>
              <p className="font-2-s cor-5">
                Garantimos o reparo completo do seu motor em caso de falhas.
                Sabemos que falhas são raras, mas estamos aqui para caso ocorra.
              </p>
            </li>

            <li>
              <img src="./assets/img/icones/carbono.svg" />
              <h3 className="font-1-l cor-0">Recuperação</h3>
              <p className="font-2-s cor-5">
                Recuperamos Bikcrafts roubadas sem custo adicional para o dono.
                Se não conseguirmos recuperar, damos uma nova para você.
              </p>
            </li>

            <li>
              <img src="./assets/img/icones/sustentavel.svg" />
              <h3 className="font-1-l cor-0">Sustentável</h3>
              <p className="font-2-s cor-5">
                Trabalhamos com a filosofia de desperdício zero. Qualquer parte
                defeituosa é reciclada e reutilizada em outro projeto.
              </p>
            </li>

            <li>
              <img src="./assets/img/icones/seguro.svg" />
              <h3 className="font-1-l cor-0">Segurança</h3>
              <p className="font-2-s cor-5">
                O nosso seguro garante que todo reparo seja feito com peças
                genuínas e de alta qualidade. Confie na Bikcraft.
              </p>
            </li>

            <li>
              <img src="./assets/img/icones/rastreador.svg" />
              <h3 className="font-1-l cor-0">Ratreador</h3>
              <p className="font-2-s cor-5">
                Garantimos o reparo completo do seu motor em caso de falhas.
                Sabemos que falhas são raras, mas estamos aqui para caso ocorra.
              </p>
            </li>

            <li>
              <img src="./assets/img/icones/velocidade.svg" />
              <h3 className="font-1-l cor-0">Rapidez</h3>
              <p className="font-2-s cor-5">
                A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                traga ela para ser reparada em uma das filiais.
              </p>
            </li>
          </ul>
        </div>
      </article>

      <article className="perguntas container">
        <h2 className="font-1-xxl">
          perguntas frequentes<span className="cor-p1">.</span>
        </h2>

        <dl>
          <div>
            <dt>
              <button
                className="font-1-m-b"
                aria-controls="pergunta1"
                aria-expanded="true"
              >
                Qual a forma de pagamento vocês aceitam?
              </button>
            </dt>
            <dd id="pergunta1" className="font-2-s cor-9 ativa">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, possimus repellendus? Inventore doloremque recusandae
              delectus? Delectus temporibus dicta similique deleniti totam
              quaerat veniam, fugit suscipit maxime atque culpa repudiandae qui.
            </dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt>
              <button
                className="font-1-m-b"
                aria-controls="pergunta2"
                aria-expanded="false"
              >
                Posuuem algum desconto
              </button>
            </dt>
            <dd id="pergunta2" className="font-2-s cor-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              temporibus amet laborum blanditiis, vitae, nihil consectetur
              perspiciatis alias facere repellendus incidunt accusantium ullam
              voluptate aliquam. Dolorum obcaecati culpa quidem sunt.
            </dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt>
              <button
                className="font-1-m-b"
                aria-controls="pergunta3"
                aria-expanded="false"
              >
                Qual a garantia que possuo?
              </button>
            </dt>
            <dd id="pergunta3" className="font-2-s cor-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              ipsam temporibus dignissimos, hic voluptates minus consectetur
              corrupti libero commodi? Deserunt minus incidunt doloribus culpa
              necessitatibus error quidem maxime quod dolor.
            </dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt>
              <button
                className="font-1-m-b"
                aria-controls="pergunta4"
                aria-expanded="false"
              >
                Posso parcelar no boleto?
              </button>
            </dt>
            <dd id="pergunta4" className="font-2-s cor-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              neque, nisi nobis magni quidem aut soluta itaque temporibus
              veritatis. Optio cumque ab recusandae tempora, totam nostrum fugit
              veniam deleniti amet.
            </dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
