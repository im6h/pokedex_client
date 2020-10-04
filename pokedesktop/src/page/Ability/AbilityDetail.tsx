import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import AbilityStore from "../../store/ability";
import Navbar from "../../component/Navbar/Navbar";
import { useParams } from "react-router-dom";
import colorStore from "../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  refactorGeneration,
} from "../../util/functionHelper";
import { Tabs, Descriptions, Spin } from "antd";
import Pokemon from "../../component/ListPokemon/pokemon";
const AbilityDetail: React.FC<{}> = () => {
  let { id } = useParams();
  const { TabPane } = Tabs;
  const abilityStore = useContext(AbilityStore);
  const { ability } = abilityStore;
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    abilityStore.getAbilityDetail(id).then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, []);

  // nest component tab
  const AbilityTabs = () => {
    return (
      <>
        <Tabs defaultActiveKey="1" size="large" centered>
          <TabPane tab="Pokemon" key="1">
            <Pokemon pokemons={ability.pokemon} />
          </TabPane>
        </Tabs>
      </>
    );
  };

  return (
    <>
      <AbilityBase>
        <>
          <AbilityNavbar>
            <Navbar />
          </AbilityNavbar>
          {!loading && (
            <>
              <AbilityWrapper>
                <AbilityInfo>
                  <AbilityNameAndNumber>
                    <h3>{formatNamePokemon(ability.name)}</h3>
                    <p
                      style={{
                        color: colorStore.typeDark,
                      }}
                    >
                      {"#" + convertNumberIdPokemon(ability.id)}
                    </p>
                  </AbilityNameAndNumber>
                </AbilityInfo>
                <AbilityFull>
                  <h4>{ability.flavor_text_entries[0].flavor_text}</h4>
                  <Descriptions
                    title="Ability Data"
                    layout="horizontal"
                    column={1}
                    bordered
                  >
                    <Descriptions.Item label="Pokemon">
                      {ability.pokemon.length}
                    </Descriptions.Item>
                    <Descriptions.Item label="Generation">
                      {refactorGeneration(ability.generation.name)}
                    </Descriptions.Item>
                  </Descriptions>
                </AbilityFull>
                <AbilityTab>
                  <AbilityTabs />
                </AbilityTab>
              </AbilityWrapper>
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
      </AbilityBase>
    </>
  );
};
const AbilityBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
const AbilityNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const AbilityWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;
const AbilityInfo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`;
const AbilityNameAndNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-abilitys: center;
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
const AbilityFull = styled.div`
  width: 500px;
  height: 70%;
  background-color: white;
  padding: 0px 30px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    font-style: italic;
  }
`;
const AbilityTab = styled.div`
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
export default observer(AbilityDetail);
