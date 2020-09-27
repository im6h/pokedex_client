import React from "react";
import styled from "styled-components";
import { convertInfoPokemon } from "../../../util/functionHelper";
import Base from "../../../interface/base";
import { Descriptions } from "antd";
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
            padding: "10px 0px",
            fontStyle: "italic",
          }}
        >
          {about[0].flavor_text}
        </h4>
      </div>
      <Descriptions layout="horizontal" column={1} bordered>
        <Descriptions.Item label="Height">
          {convertInfoPokemon(height)} m
        </Descriptions.Item>
        <Descriptions.Item label="Weight">
          {convertInfoPokemon(weight)} kg
        </Descriptions.Item>
        <Descriptions.Item label="Base Happiness">
          {happiness}
        </Descriptions.Item>
        <Descriptions.Item label="Capture Rate">
          {captureRate}%
        </Descriptions.Item>
        <Descriptions.Item label="Legendary">{legendary}</Descriptions.Item>
        <Descriptions.Item label="Mythical">{mythical}</Descriptions.Item>
      </Descriptions>
    </TabAbout>
  );
};

const TabAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 50px 30px;
`;
export default About;
