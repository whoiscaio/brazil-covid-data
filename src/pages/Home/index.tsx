import { useEffect, useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import AppInfo from './AppInfo';
import ImageBox from './ImageBox';
import HomepageContainer from './styles';

const REQUEST_URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

function HomePage() {
  const [data, loading] = useAxios(REQUEST_URL);
  const mapRef = useRef<SVGAElement | null>(null);
  let states: HTMLCollection | null = null;

  function handleStateHover(e: any) {
    const currentStateUF = e.path[1].id;

    console.log(currentStateUF);
  }

  useEffect(() => {
    if (!data || !mapRef.current) return;

    states = mapRef.current.children;
    const convertedStates = Array.prototype.slice.call(states);

    convertedStates.forEach((state) => {
      state.addEventListener('mouseover', handleStateHover);
    });

    return () => {
      convertedStates.forEach((state) => {
        state.removeEventListener('mouseover', handleStateHover);
      });
    };
  }, [data, loading]);

  return (
    <HomepageContainer>
      <AppInfo />
      <ImageBox svgRef={mapRef} />
    </HomepageContainer>
  );
}

export default HomePage;
