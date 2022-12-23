import {FaArrowLeft as Arrow} from 'react-icons/fa';

import { TransferenciaPage } from "../../moldes/pagination";
import './styles.css';

type Props = {
  page: TransferenciaPage;
  onChange: Function;
}

export default function Pagination({ page, onChange } : Props) {

  return (
      <div className="bk-pagination-container">
          <div className="bk-pagination-box">
              <button className="bk-pagination-button" disabled={page.first} onClick={() => 
                  onChange(page.number - 1)} >
                  <Arrow />
              </button>
              <p>{`${page.number + 1} de ${page.totalPages}`}</p>
              <button className="bk-pagination-button" disabled={page.last} onClick={() => 
              onChange(page.number + 1)} >
                  <Arrow className="bk-flip-horizontal" />
              </button>
          </div>
      </div>
  );
}