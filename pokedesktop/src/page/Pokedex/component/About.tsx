import React from "react";
import styled from "styled-components";
import colorStore from "../../../asset/style/color";
import { convertInfoPokemon } from "../../../util/functionHelper";
import Base from "../../../interface/base";
interface AboutProps {
  weight: number;
  height: number;
  about: [
    {
      flavor_text: string;
      language: Base;
      version: Base;
    },
  ];
  legendary: string;
  mythical: string;
  happiness: string;
  captureRate: string;
}
const About = ({
  weight,
  height,
  about,
  legendary,
  mythical,
  happiness,
  captureRate,
}: AboutProps) => {
  return (
    <TabAbout>
      <div>
        <h4
          style={{
            fontWeight: "normal",
            textAlign: "left",
            padding: "0px 20px",
            fontStyle: "italic",
          }}
        >
          {about[0].flavor_text}
        </h4>
      </div>
      <ShadowDiv>
        <InfoDiv>
          <h5>Height</h5>
          <p>{convertInfoPokemon(height)} m</p>
        </InfoDiv>
        <InfoDiv>
          <h5>Weight</h5>
          <p>{convertInfoPokemon(weight)} kg</p>
        </InfoDiv>
      </ShadowDiv>
      <ShadowDiv>
        <InfoDiv>
          <h5>Base Happiness</h5>
          <p>{happiness}</p>
        </InfoDiv>
        <InfoDiv>
          <h5>Capture Rate</h5>
          <p>{captureRate}%</p>
        </InfoDiv>
      </ShadowDiv>
      <ShadowDiv>
        <InfoDiv>
          <h5>Legendary</h5>
          <p>{legendary}</p>
        </InfoDiv>
        <InfoDiv>
          <h5>Mythical</h5>
          <p>{mythical}</p>
        </InfoDiv>
      </ShadowDiv>
    </TabAbout>
  );
};
export default About;

const TabAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 50px 30px;
`;

const ShadowDiv = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
`;

const InfoDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  text-align: left;
  h5 {
    font-weight: bold;
    font-size: 16px;
    color: ${colorStore.typeSteel};
    margin-bottom: 10px;
  }
  p {
    font-weight: bold;
    font-size: 18px;
  }
`;
