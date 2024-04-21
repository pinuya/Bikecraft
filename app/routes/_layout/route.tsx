import { Link, Outlet } from "@remix-run/react";
import { bikcraft } from "assets/img";

export default function Layout() {
  return (
    <div>
      <header className="header-bg">
        <div className="container header">
          <a href="./">
            {" "}
            <img src={bikcraft} alt="Bikcraft" />
          </a>
          <nav aria-label="primaria">
            <ul className="header-menu font-1-m">
              <li>
                <Link to={"/bicicletas"}>Bicicletas</Link>
              </li>
              <li>
                <a href="./bicicletas.html">Seguros</a>
              </li>
              <li>
                <a href="./bicicletas.html">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer-bg">
        <div className="footer container">
          <img src="./assets/img/bikcraft.svg" alt="logo Bikecraft" />

          <div className="footer-contato">
            <h3 className="font-2-l-b cor-0">Contato</h3>
            <ul className="font-2-m cor-5">
              <li>
                <a href="tel:+5521999-9999">+55 21 9999-9999</a>
              </li>
              <li>
                <a href="mailto:contato@bikecraft.com">contato@bikecraft.com</a>
              </li>
              <li>Rua Num Sei Onde, 4938</li>
              <li>Rio de Janeiro - RJ</li>
            </ul>

            <div className="footer-redes">
              <a href="">
                <img src="./assets/img/redes/instagram.svg" alt="instagram" />
              </a>

              <a href="">
                <img src="./assets/img/redes/facebook.svg" alt="facebook" />
              </a>

              <a href="">
                <img src="./assets/img/redes/youtube.svg" alt="youtube" />
              </a>
            </div>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-l-b cor-0">Informações</h3>
            <nav>
              <ul className="font-1-m cor-5">
                <li>
                  <Link to={"/bicicletas"}>Bicicletas</Link>
                </li>
                <li>
                  <Link to="./seguros">Seguros</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <li>
                  <Link to="/termos">Termos e Condições</Link>
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
