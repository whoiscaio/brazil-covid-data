import { useEffect, useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import AppInfo from './AppInfo';
import ImageBox from './ImageBox';
import HomepageContainer from './styles';

const REQUEST_URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

function HomePage() {
  const [data, loading] = useAxios(REQUEST_URL);
  const mapRef = useRef<SVGAElement | null>(null);

  useEffect(() => {
    console.log(data);
    console.log(loading);
  }, [data, loading]);

  return (
    <HomepageContainer>
      <AppInfo />
      <ImageBox svgRef={mapRef} />
    </HomepageContainer>
  );
}

export default HomePage;
