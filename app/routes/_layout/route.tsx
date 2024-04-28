import { Link, Outlet } from "@remix-run/react";
import { bikcraft, github, linkedin } from "assets/img";

export default function Layout() {
  return (
    <div>
      <header className="header-bg">
        <div className="container header">
          <Link to="./">
            {" "}
            <img src={bikcraft} alt="Bikcraft" />
          </Link>
          <nav aria-label="primaria">
            <ul className="header-menu font-1-m">
              <li>
                <Link prefetch="intent" to="/bicicletas">
                  Bicicletas
                </Link>
              </li>
              <li>
                <Link prefetch="intent" to="/seguros">
                  Seguros
                </Link>
              </li>
              <li>
                <Link prefetch="intent" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer-bg">
        <div className="footer container">
          <img src="../assets/img/bikcraft.svg" alt="logo Bikecraft" />

          <div className="footer-contato">
            <h3 className="font-2-l-b cor-0">Contato</h3>
            <ul className="font-2-m cor-5">
              <li>
                <Link to="https://twitter.com/pinuyadev">@pinuyadev</Link>
              </li>
              <li>
                <Link to="mailto:pinuyadeveloper@gmail.com">
                  pinuyadeveloper@gmail.com
                </Link>
              </li>
              <li>Rua Num Sei Onde, 4938</li>
              <li>Rio de Janeiro - RJ</li>
            </ul>

            <div className="footer-redes">
              <Link to="">
                <img src="../assets/img/redes/instagram.svg" alt="instagram" />
              </Link>

              <Link to="https://github.com/pinuya">
                <img src={github} alt="github" />
              </Link>

              <Link to="https://www.linkedin.com/in/tifanyanunes/">
                <img src={linkedin} alt="linkedin" />
              </Link>
            </div>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-l-b cor-0">Informações</h3>
            <nav>
              <ul className="font-1-m cor-5">
                <li>
                  <Link prefetch="intent" to="/bicicletas">
                    Bicicletas
                  </Link>
                </li>
                <li>
                  <Link prefetch="intent" to="./seguros">
                    Seguros
                  </Link>
                </li>
                <li>
                  <Link prefetch="intent" to="/contato">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link prefetch="intent" to="/termos">
                    Termos e Condições
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="footer-copy font-2-m cor-6">
          Bikecraft, alguns direitos reservados.
        </p>
      </footer>
    </div>
  );
}
