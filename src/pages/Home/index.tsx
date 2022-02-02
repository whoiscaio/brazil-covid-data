import { useEffect, useRef, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import AppInfo from './AppInfo';
import ImageBox from './ImageBox';
import Popup from './Popup';
import HomepageContainer from './styles';

const REQUEST_URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

function HomePage() {
  const [hoveredState, setHoveredState] = useState<any>(null);

  const [data, loading] = useAxios(REQUEST_URL);
  const mapRef = useRef<SVGAElement | null>(null);
  let states: HTMLCollection | null = null;

  function handleStateHover(e: any) {
    const currentState = data.data.find((state: any) => state.uf === e.path[1].id);

    setHoveredState(currentState);
  }

  function handleStateOver() {
    setHoveredState(null);
  }

  useEffect(() => {
    if (!data || !mapRef.current) return;

    states = mapRef.current.children;
    const convertedStates = Array.prototype.slice.call(states);

    convertedStates.forEach((state) => {
      state.addEventListener('mouseover', handleStateHover);
      state.addEventListener('mouseout', handleStateOver);
    });

    return () => {
      convertedStates.forEach((state) => {
        state.removeEventListener('mouseover', handleStateHover);
        state.removeEventListener('mouseout', handleStateOver);
      });
    };
  }, [data, loading]);

  return (
    <HomepageContainer>
      <AppInfo />
      <ImageBox svgRef={mapRef} />
      { hoveredState && <Popup hoveredState={hoveredState} /> }
    </HomepageContainer>
  );
}

export default HomePage;
