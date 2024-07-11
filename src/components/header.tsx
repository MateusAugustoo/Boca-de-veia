import { useState } from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [selected, setSelected] = useState('contos');

  return (
    <header>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <p>💭💣💥</p>
          <p className={style.title__logo}>boca de veia</p>
        </div>

        <nav className={style.nav__container}>
          <ul className={style.header__nav__content}>
            <li
              aria-selected={selected === 'contos'}
              className={selected === 'contos' ? style.active : ''}
              onClick={() => setSelected('contos')}
            >
              <Link to={'/contos'}>Contos</Link>
            </li>
            <li
              aria-selected={selected === 'write'}
              className={selected === 'write' ? style.active : ''}
              onClick={() => setSelected('write')}
            >
              <Link to={'/write'}>Escrever</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
