import {
  useEffect, useRef, useState,
} from 'react';
import Modal from '../../components/Modal';

import useAxios from '../../hooks/useAxios';
import StateInterface from '../../interfaces/StateInterface';
import Popup from './Popup';

import { ReactComponent as MapComponent } from '../../assets/images/map.svg';
import ImageBox from '../../components/ImageBox';
import PageContainer from '../PageContainer';
import PageInfo from '../../components/PageInfo';

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

  const [modalState, setModalState] = useState<StateInterface | null>(null);

  const mapRef = useRef<SVGSVGElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [data, loading] = useAxios(REQUEST_URL);

  let states: HTMLCollection | null = null;

  function closeModal() {
    setModalState(null);
  }

  function handleStateLeave() {
    setHoveredState(null);
  }

  function handleStateClick(e: any) {
    const currentState = data.data.find((state: StateInterface) => state.uf === e.path[1].id);

    setModalState(currentState);
    setHoveredState(null);
  }

  function handleStateMove(e: any) {
    if (!popupRef.current) return;

    const popupRealPosition = e.clientX + (popupRef.current.offsetWidth / 2);
    const popupLimitPosition = window.innerWidth - (popupRef.current.offsetWidth / 2);

    setPopupStyle((prevState: any) => ({
      ...prevState,
      top: e.clientY - 50,
      left: popupRealPosition > window.innerWidth ? popupLimitPosition : e.clientX,
    }));
  }

  function handleStateEnter(e: any) {
    const currentState = data.data.find((state: StateInterface) => state.uf === e.target.id);

    setHoveredState(currentState);
  }

  useEffect(() => {
    if (!data || !mapRef.current) return;

    states = mapRef.current.children;
    const convertedStates = Array.prototype.slice.call(states);

    convertedStates.forEach((state) => {
      state.addEventListener('mouseenter', handleStateEnter);
      state.addEventListener('click', handleStateClick);
      state.addEventListener('mousemove', handleStateMove);
      state.addEventListener('mouseleave', handleStateLeave);
    });

    return () => {
      convertedStates.forEach((state) => {
        state.removeEventListener('mouseenter', handleStateEnter);
        state.removeEventListener('click', handleStateClick);
        state.addEventListener('mousemove', handleStateMove);
        state.removeEventListener('mouseleave', handleStateLeave);
      });
    };
  }, [data, loading]);

  return (
    <PageContainer>
      <PageInfo>
        <h1>Real-time covid data in Brazil</h1>
        <p>
          Brazil Covid Data is a web application that allows you to see information
          about the pandemics on your state just by hovering it on the map.
        </p>
      </PageInfo>
      <ImageBox>
        <MapComponent id="map-image" ref={mapRef} />
      </ImageBox>
      { hoveredState
        && <Popup styles={popupStyle} popupRef={popupRef} hoveredState={hoveredState} />}
      {
        modalState && <Modal state={modalState} close={closeModal} />
      }
    </PageContainer>
  );
}

export default HomePage;
