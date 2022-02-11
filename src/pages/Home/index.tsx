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
  const [allCountryInformation, setAllCountryInformation] = useState<StateInterface | null>(null);

  const [modalState, setModalState] = useState<StateInterface | null>(null);

  const mapRef = useRef<SVGSVGElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [data, loading] = useAxios(REQUEST_URL);

  let states: HTMLCollection | null = null;

  function generateAllCountryInformation(statesData: StateInterface[]) {
    if (!statesData) return null;

    let totalCases = 0;
    let totalDeaths = 0;
    let totalSuspects = 0;

    statesData.forEach((stateData) => {
      totalCases += stateData.cases;
      totalDeaths += stateData.deaths;
      totalSuspects += stateData.suspects;
    });

    setAllCountryInformation({
      cases: totalCases,
      deaths: totalDeaths,
      suspects: totalSuspects,
    });
  }

  function generateStatesColor(statesElements: SVGGElement[], statesData: StateInterface[]) {
    statesElements.forEach((stateElement) => {
      statesData.forEach((stateData) => {
        if (stateElement.id === stateData.uf) {
          const relationCaseToDeath = (stateData.deaths * 100) / stateData.cases;

          console.log(stateElement.id, relationCaseToDeath);

          if (relationCaseToDeath < 1.5) {
            stateElement.classList.add('low-risk');
          } else if (relationCaseToDeath >= 1.5 && relationCaseToDeath < 2) {
            stateElement.classList.add('midlow-risk');
          } else if (relationCaseToDeath >= 2 && relationCaseToDeath < 2.3) {
            stateElement.classList.add('mid-risk');
          } else if (relationCaseToDeath >= 2.3 && relationCaseToDeath < 2.7) {
            stateElement.classList.add('midhigh-risk');
          } else {
            stateElement.classList.add('high-risk');
          }
          /*
          if (stateData.cases < 800000) {
            stateElement.classList.add('low-cases');
          } else if (stateData.cases >= 800000 && stateData.cases < 1300000) {
            stateElement.classList.add('lowmid-cases');
          } else if (stateData.cases >= 1300000 && stateData.cases < 1600000) {
            stateElement.classList.add('mid-cases');
          } else if (stateData.cases >= 1600000 && stateData.cases < 1900000) {
            stateElement.classList.add('midhigh-cases');
          } else {
            stateElement.classList.add('high-cases');
          }
          */
        }
      });
    });
  }

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

    generateAllCountryInformation(data.data);
    generateStatesColor(convertedStates, data.data);

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
        <div className="all-country-overview">
          <div className="cases">
            <span>Cases</span>
            <p>{(allCountryInformation?.cases || 0).toLocaleString('en-US')}</p>
          </div>
          <div className="deaths">
            <span>Deaths</span>
            <p>{(allCountryInformation?.deaths || 0).toLocaleString('en-US')}</p>
          </div>
          <div className="suspects">
            <span>Suspects</span>
            <p>{(allCountryInformation?.suspects || 0).toLocaleString('en-US')}</p>
          </div>
        </div>
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
