import ImageBox from '../../components/ImageBox';
import PageInfo from '../../components/PageInfo';
import PageContainer from '../PageContainer';

import programmerImage from '../../assets/images/programmer.png';

function About() {
  return (
    <PageContainer aboutPage>
      <ImageBox>
        <img id="image" src={programmerImage} alt="Programmer" />
      </ImageBox>
      <PageInfo>
        <h1>A little bit about us</h1>
        <p>The Brazil Covid Data application is a website created by Caio Lima.</p>
        <p>
          It was created to provide a user-friendly interface and help people to get
          real-time general information about the pandemics on their state. It does not
          provide sophisticated and deep information today, maybe tomorrow.
        </p>
      </PageInfo>
    </PageContainer>
  );
}

export default About;
