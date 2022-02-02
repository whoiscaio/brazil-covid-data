import { NavLink } from 'react-router-dom';

import HeaderContainer from './styles';

import virus from '../../assets/images/virus.svg';

function Header() {
  return (
    <HeaderContainer>
      <div className="image">
        <img src={virus} alt="Virus icon" />
      </div>
      <div className="links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><a href="https://github.com/whoiscaio/brazil-covid-data" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;
