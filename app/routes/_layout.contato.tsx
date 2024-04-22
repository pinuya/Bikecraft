import { Form } from "@remix-run/react";

export default function Contato() {
  return (
    <div>
      <main>
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-2-l-b cor-5">Respostas em até 24h</p>
            <h1 className="font-1-xxl cor-0">
              nosso contato<span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="contato container">
          <section className="contato-dados" aria-label="Endereço">
            <h2 className="font-1-m cor-0">Loja Online</h2>
            <div className="contato-endereco font-2-s cor-4">
              <p>Rua Ali Perto, 35</p>
              <p>Rio de Janeiro - RJ</p>
              <p>Brasil - Terra - Vita Láctea</p>
            </div>
            <address className="contato-meios font-2-s cor-4">
              <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
              <a href="mailto:assistencia@bikcraft.com">
                assistencia@bikcraft.com
              </a>
              <a href="tel:+552199999999">+55 21 9999-9999</a>
            </address>
            <div className="contato-redes">
              <a href="./">
                <img src="./assets/img/redes/instagram-p.svg" alt="Instagram" />
              </a>
              <a href="./">
                <img src="./assets/img/redes/facebook-p.svg" alt="Facebook" />
              </a>
              <a href="./">
                <img src="./assets/img/redes/youtube-p.svg" alt="Youtube" />
              </a>
            </div>
          </section>
          <section className="contato-formulario" aria-label="Formulário">
            <Form className="form" action="./contato.html">
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  placeholder="(21) 9999-9999"
                />
              </div>
              <div className="col-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contato@email.com"
                />
              </div>
              <div className="col-2">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  placeholder="O que você precisa?"
                ></textarea>
              </div>
              <button className="botao col-2">Enviar Mensagem</button>
            </Form>
          </section>
        </div>
      </main>

      <article className="lojas container">
        <h2 className="font-1-xxl">
          Lojas locais <span className="cor-p1">.</span>
        </h2>
        <div className="lojas-item">
          <img
            src="./assets/img/lojas/rj.jpg"
            alt="marcando o endereço em RJ"
          />

          <div className="lojas-conteudo">
            <h2 className="font-1-xl">
              Rio de Janeiro<span className="cor-p1">.</span>
            </h2>
            <div className="lojas-dados font-2-s cor-8">
              <p>Rua Ali Perto, 25</p>
              <p>Rio de Janeiro - RJ</p>
            </div>

            <div className="lojas-dados font-2-s cor-8">
              <a href="mailto:rj@bikecraft.com">rj@bikecraft.com</a>
              <a href="tel:+559999999999">+55 21 99999-9999</a>
            </div>
            <p className="lojas-tempo font-1-s">
              <img src="./assets/img/icones/horario.svg" />
              08-18h de seg à dom
            </p>
          </div>
        </div>

        <div className="lojas-item">
          <img
            src="./assets/img/lojas/sp.jpg"
            alt="marcando o endereço em sp"
          />

          <div className="lojas-conteudo">
            <h2 className="font-1-xl">
              São Paulo<span className="cor-p1">.</span>
            </h2>
            <div className="lojas-dados font-2-s cor-8">
              <p>Rua Ali Perto, 25</p>
              <p>São Paulo, SP</p>
            </div>

            <div className="lojas-dados font-2-s cor-8">
              <a href="mailto:rj@bikecraft.com">sp@bikecraft.com</a>
              <a href="tel:+559999999999">+55 11 99999-9999</a>
            </div>
            <p className="lojas-tempo font-1-s">
              <img src="./assets/img/icones/horario.svg" />
              08-18h de seg à dom
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
