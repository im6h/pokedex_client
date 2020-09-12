/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 11/9/2020.
 *
 */
import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../../component/Navbar/Navbar";
import colorStore from "../../asset/style/color";
import { observer } from "mobx-react-lite";
import GenerationStore from "../../store/generation";
function Generation() {
  const [loading, setLoading] = React.useState(true);
  const generationStore = React.useContext(GenerationStore);
  React.useEffect(() => {
    setTimeout(() => {
      generationStore.getGenerations();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <GenerationBase>
      <GenerationNavbar>
        <Navbar />
      </GenerationNavbar>
      <GenerationBall>
        <svg
          width="163"
          height="192"
          viewBox="0 0 163 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
            fill="#303943"
          />
        </svg>
      </GenerationBall>
      <GenerationWrapper>
        <GenerationTitle>
          <p>Generations</p>
        </GenerationTitle>

        <GenerationList>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation I</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://miro.medium.com/max/970/1*y0-zWEUPYi6TRuz0lC-0Ig.jpeg"
                  alt="generation-i"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation II</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="http://pokemoncollector.altervista.org/wp-content/uploads/2016/03/download.jpg"
                  alt="genII"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation III</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/01/Pokemon-G3-610x325.jpg"
                  alt="genIII"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation IV</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://usercontent2.hubstatic.com/14766303.jpg"
                  alt="genIV"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation V</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/01/Pokemon-G5-610x325.jpg"
                  alt="genV"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation VI</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://images.eurogamer.net/2013/usgamer/IMAGE2.jpg"
                  alt="genVI"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation VII</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://i2.wp.com/i0.kym-cdn.com/entries/icons/original/000/020/475/Pokemon_SunMoon_Starters.jpg"
                  alt="genVII"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
          <GenerationCard>
            <GenerationCardNumber>
              <h4>Generation VIII</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://i2.wp.com/i0.kym-cdn.com/entries/icons/original/000/020/475/Pokemon_SunMoon_Starters.jpg"
                  alt="genVIII"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
        </GenerationList>
      </GenerationWrapper>
      {loading && (
        <Modal>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Loading />
            <p
              style={{
                margin: "10px 0px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#e2e3e4",
              }}
            >
              Loading
            </p>
          </div>
        </Modal>
      )}
    </GenerationBase>
  );
}

// style Generation base
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const zoomX = keyframes`
 from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const GenerationBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
const GenerationNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const GenerationBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;
const GenerationWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;
const GenerationTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;
const GenerationList = styled.div`
  margin-top: 50px;
  display: grid;
  width: 100%;
  grid-template-columns: 45% 45%;
  grid-gap: 1px 1px;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;
const GenerationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  border: 3px solid ${colorStore.background};
  border-radius: 10px;
  margin: 10px 0px;
  position: relative;
  padding: 2px 0px;
  img {
    width: 100px;
  }
  &:hover {
    cursor: pointer;
    animation-name: ${zoomX};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;
const GenerationCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeFire};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const GenerationCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
const GenerationIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
`;
export default observer(Generation);
