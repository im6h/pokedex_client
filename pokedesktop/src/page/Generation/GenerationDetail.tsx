/**
 *
 * @author im6h
 *
 * Create at 29/9/2020.
 * Update at 29/9/2020.
 *
 */
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Tabs, Spin, Descriptions } from "antd";
import colorStore from "../../asset/style/color";
import Move from "../../component/ListMove/move";
import Pokemon from "../../component/ListPokemon/pokemon";
import Ability from "../../component/ListAbility/ability";
import Navbar from "../../component/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import {
  convertNumberIdPokemon,
  refactorGeneration,
} from "../../util/functionHelper";
import GenerationStore from "../../store/generation";
const GenerationDetail = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const generationStore = useContext(GenerationStore);
  const { generation } = generationStore;
  const { TabPane } = Tabs;
  useEffect(() => {
    generationStore.getGenerationById(id).then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, []);
  const GenerationTabs = () => {
    return (
      <>
        <Tabs defaultActiveKey="1" size="large" centered>
          <TabPane tab="Ability" key="1">
            <Ability abilityCustom={generation.abilities} />
          </TabPane>
          <TabPane tab="Move" key="2">
            <Move
              colorPokemon={colorStore.typeNormal}
              moveCustom={generation.moves}
            />
          </TabPane>
          <TabPane tab="Pokemon" key="3">
            <Pokemon pokemon_species={generation.pokemon_species} />
          </TabPane>
        </Tabs>
      </>
    );
  };
  return (
    <>
      <GenerationBase>
        <>
          <GenerationNavbar>
            <Navbar />
          </GenerationNavbar>
          {!loading && (
            <>
              <GenerationWrapper>
                <GenerationInfo>
                  <GenerationNameAndNumber>
                    <h3>{refactorGeneration(generation.name)}</h3>
                    <p
                      style={{
                        color: colorStore.typeNormal,
                      }}
                    >
                      {"#" + convertNumberIdPokemon(generation.id)}
                    </p>
                  </GenerationNameAndNumber>
                </GenerationInfo>
                <GenerationData>
                  <Descriptions layout="horizontal" column={1} bordered>
                    <Descriptions.Item label="Move">
                      {generation.moves.length}
                    </Descriptions.Item>
                    <Descriptions.Item label="Pokemon">
                      {generation.pokemon_species.length}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ability">
                      {generation.abilities.length}
                    </Descriptions.Item>
                  </Descriptions>
                </GenerationData>
                <GenerationTab>
                  <GenerationTabs />
                </GenerationTab>
              </GenerationWrapper>
            </>
          )}
          {loading && ( //check loading to show modal
            <div
              style={{
                width: "100%",
                display: "flex",
                height: "80vh",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Spin size="large" />
            </div>
          )}
        </>
      </GenerationBase>
    </>
  );
};
const GenerationBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const GenerationNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const GenerationWrapper = styled.div`
  width: 500px;
`;
const GenerationInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;
const GenerationTab = styled.div`
  width: 500px;
  background-color: white;
  padding: 0px 30px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    font-style: italic;
  }
`;
const GenerationNameAndNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colorStore.background};
  h3 {
    font-weight: bold;
    font-size: 36px;
    margin: 5px 30px;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    margin: 5px 30px;
  }
`;
const GenerationData = styled.div`
  width: 500px;
  height: 60%;
  background-color: white;
  padding: 0px 30px;
  margin: 25px 0px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    font-style: italic;
  }
`;
export default observer(GenerationDetail);
