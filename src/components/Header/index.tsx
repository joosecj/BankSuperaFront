import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link to='/home'>
          <h1 className='title'>BANK SUPERA</h1>
        </Link>
      </div>
    </header>
  );
}