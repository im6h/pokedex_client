import React from "react";
import { TabAbout, ShadowDiv, InfoDiv } from "../style";
import { convertInfoPokemon } from "../../../util/functionHelper";
interface AboutProps {
  weight: number;
  height: number;
}
const About = ({ weight, height }: AboutProps) => {
  return (
    <TabAbout>
      {/* <div>
        <h4
          style={{
            fontWeight: "normal",
            textAlign: "left",
          }}
        ></h4>
      </div> */}
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
    </TabAbout>
  );
};
export default About;
