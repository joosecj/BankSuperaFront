import { NavLink } from 'react-router-dom';
import { ContaDTO } from '../../moldes/conta';
import './styles.css';

type Props = {
  conta: ContaDTO;
}

export default function MenuConta({ conta }: Props) {
  return (
    <div className='bk-card-menu-conta'>
      <NavLink className={({ isActive }) => isActive ? "bk-title-menu-conta bk-active-menu-conta-title" : "bk-title-menu-conta"}
        to={`${conta.idConta}`}
        key={conta.idConta} >
        <div className='bk-conta-content'>
          {conta.idConta} -
          <span>{conta.nomeResponsavel.toUpperCase()}</span>
        </div>
      </NavLink>
    </div>
  );
}