// import { useLocation } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import css from './style.module.scss';
import home from '../../assets/images/home.svg';
import homeSelected from '../../assets/images/home-selected.svg';
import clients from '../../assets/images/clientes.svg'
import clientsSelected from '../../assets/images/clientes-selected.svg'
import charges from '../../assets/images/cobrancas.svg';
import chargesSelected from '../../assets/images/cobranca-selected.svg';

export default function SideBar(): JSX.Element {

  const location = useLocation();

  return (
    <section className={css.containerSideBar}>
      <div
        className={location.pathname === '/' ? 'selected' : ''}
      >
        <a href='/home'>
          <img
            src={location.pathname === '/home' ? homeSelected : home} alt=""
          />
        </a>
      </div>

      <div className={location.pathname === '/clients' ? 'selected' : ''}>
        <a href='/clients'>
          <img
            src={location.pathname === '/clients' ? clientsSelected : clients} alt=""

          />
        </a>
      </div>

      <div className={location.pathname === '/charges' ? 'selected' : ''}>
        <a href='/bills'>
          <img
            src={location.pathname === '/charges' ? chargesSelected : charges}

            alt=''
          />
        </a>
      </div>
    </section>
  );
}