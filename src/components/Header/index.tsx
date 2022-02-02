import { NavLink } from 'react-router-dom';

import HeaderContainer from './styles';

import virus from '../../assets/images/virus.svg';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';

type HeaderProps = {
  currentTheme: string,
  toggleTheme: () => void,
}

function Header({ currentTheme, toggleTheme }: HeaderProps) {
  const themeImage = currentTheme === 'light' ? moon : sun;

  return (
    <HeaderContainer>
      <div className="icon">
        <NavLink to="/">
          <img src={virus} alt="Virus icon" />
          <h2>Brazil Covid Data</h2>
        </NavLink>
      </div>
      <div className="actions">
        <div className="links">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><a href="https://github.com/whoiscaio/brazil-covid-data" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <button type="button" onClick={toggleTheme}><img src={themeImage} alt="Other theme" /></button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
