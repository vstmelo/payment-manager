import home from '../../assets/images/home.svg';
import homeSelected from '../../assets/images/home-selected.svg';
import clients from '../../assets/images/clientes.svg'
import clientsSelected from '../../assets/images/clientes-selected.svg'
import charges from '../../assets/images/cobrancas.svg';
import chargesSelected from '../../assets/images/cobranca-selected.svg';
import { ContainerSide } from '../../assets/styles/components/sideBar';


export default function SideBar(): JSX.Element {
  const currentPath = window.location.pathname;

  return (
    <ContainerSide>
      <div
        className={currentPath === '/' ? 'selected' : ''}
      >
        <a href='/home'>
          <img
            src={currentPath === '/home' ? homeSelected : home} alt=""
          />
        </a>
      </div>

      <div className={currentPath === '/clients' ? 'selected' : ''}>
        <a href='/clients'>
          <img
            src={currentPath === '/clients' ? clientsSelected : clients} alt=""

          />
        </a>
      </div>

      <div className={currentPath === '/charges' ? 'selected' : ''}>
        <a href='/bills'>
          <img
            src={currentPath === '/charges' ? chargesSelected : charges}

            alt=''
          />
        </a>
      </div>
    </ContainerSide>
  );
}