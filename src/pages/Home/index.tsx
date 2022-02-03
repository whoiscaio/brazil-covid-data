import {
  useEffect, useRef, useState,
} from 'react';

import useAxios from '../../hooks/useAxios';
import StateInterface from '../../interfaces/StateInterface';
import AppInfo from './AppInfo';
import ImageBox from './ImageBox';
import Popup from './Popup';
import HomepageContainer from './styles';

const REQUEST_URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

function HomePage() {
  const [hoveredState, setHoveredState] = useState<StateInterface | null>(null);
  const [popupStyle, setPopupStyle] = useState({
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    transform: 'translate(-50%, calc(-50% - 1rem))',
  });

  const mapRef = useRef<SVGAElement | null>(null);

  const [data, loading] = useAxios(REQUEST_URL);

  let states: HTMLCollection | null = null;

  function handleStateMove(e: any) {
    setPopupStyle((prevState: any) => ({
      ...prevState,
      top: e.clientY - 50,
      left: e.clientX,
    }));
  }

  function handleStateEnter(e: any) {
    const currentState = data.data.find((state: any) => state.uf === e.target.id);

    setHoveredState(currentState);
  }

  function handleStateLeave() {
    setHoveredState(null);
  }

  useEffect(() => {
    if (!data || !mapRef.current) return;

    states = mapRef.current.children;
    const convertedStates = Array.prototype.slice.call(states);

    convertedStates.forEach((state) => {
      state.addEventListener('mouseenter', handleStateEnter);
      state.addEventListener('mousemove', handleStateMove);
      state.addEventListener('mouseleave', handleStateLeave);
    });

    return () => {
      convertedStates.forEach((state) => {
        state.removeEventListener('mouseenter', handleStateEnter);
        state.addEventListener('mousemove', handleStateMove);
        state.removeEventListener('mouseleave', handleStateLeave);
      });
    };
  }, [data, loading]);

  return (
    <HomepageContainer>
      <AppInfo />
      <ImageBox svgRef={mapRef} />
      { hoveredState && <Popup styles={popupStyle} hoveredState={hoveredState} /> }
    </HomepageContainer>
  );
}

export default HomePage;
