import { NavLink } from 'react-router-dom';

import PageContainer from '../PageContainer';
import NotFoundContainer from './styles';

function NotFound() {
  return (
    <PageContainer className="not-found-page">
      <NotFoundContainer>
        <h1>Sounds like you are lost...</h1>
        <p>Click on the button below to get back on track</p>
        <NavLink className="link-button" to="/">Let's go back</NavLink> {/* eslint-disable-line */}
      </NotFoundContainer>
    </PageContainer>
  );
}

export default NotFound;
