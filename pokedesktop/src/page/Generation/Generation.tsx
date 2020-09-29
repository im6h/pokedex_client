/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 29/9/2020.
 *
 */
import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import GenerationStore from "../../store/generation";
import {
  GenerationBase,
  GenerationBall,
  GenerationCard,
  GenerationCardName,
  GenerationCardNumber,
  GenerationList,
  GenerationNavbar,
  GenerationTitle,
  GenerationWrapper,
} from "./style";
import { Spin } from "antd";

function Generation() {
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/1");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/2");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/3");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/4");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/5");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/6");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/7");
            }}
          >
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
          <GenerationCard
            onClick={() => {
              history.push("/generation/8");
            }}
          >
            <GenerationCardNumber>
              <h4>Generation VIII</h4>
            </GenerationCardNumber>
            <GenerationCardName>
              <p>
                <img
                  src="https://i0.wp.com/www.nintendo-insider.com/wp-content/uploads/2019/02/pokemon_sword_and_shield_logo.jpg"
                  alt="genVIII"
                />
              </p>
            </GenerationCardName>
          </GenerationCard>
        </GenerationList>
      </GenerationWrapper>
      {loading && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Spin size="large" />
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
      )}
    </GenerationBase>
  );
}

export default observer(Generation);
