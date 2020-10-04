/**
 *
 * @author im6h
 *
 * Create at 27/9/2020.
 * Update at 4/10/2020.
 *
 */
import React, { useState, useEffect, useContext } from "react";
import colorStore, { getColor } from "../../asset/style/color";
import styled from "styled-components";
import { Tabs, Spin, Descriptions } from "antd";
import Move from "../../component/ListMove/move";
import Pokemon from "../../component/ListPokemon/pokemon";
import Effect from "./components/effect";
import TypeStore from "../../store/type";
import Navbar from "../../component/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import {
  convertNumberIdPokemon,
  refactorGeneration,
  formatNamePokemon,
} from "../../util/functionHelper";

const TypeDetail: React.FC<{}> = () => {
  let { id } = useParams();
  const typeStore = useContext(TypeStore);
  const { TabPane } = Tabs;
  const { type } = typeStore;
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    typeStore.getTypeById(id).then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, []);
  const TypeTabs = () => {
    return (
      <>
        <Tabs defaultActiveKey="1" size="large" centered>
          <TabPane tab="Move" key="1">
            <Move colorPokemon={type.name} moveCustom={type.moves} />
          </TabPane>
          <TabPane tab="Pokemon" key="2">
            <Pokemon pokemons={type.pokemon} />
          </TabPane>
          <TabPane tab="Effect" key="3">
            <Effect
              double_damage_from={type.damage_relations.double_damage_from}
              double_damage_to={type.damage_relations.double_damage_to}
              half_damage_from={type.damage_relations.half_damage_from}
              half_damage_to={type.damage_relations.double_damage_to}
              no_damage_from={type.damage_relations.no_damage_from}
              no_damage_to={type.damage_relations.no_damage_to}
            />
          </TabPane>
        </Tabs>
      </>
    );
  };
  return (
    <>
      <TypeBase>
        <>
          <TypeNavbar>
            <Navbar />
          </TypeNavbar>
          {!loading && (
            <>
              <TypeWrapper>
                <TypeInfo>
                  <TypeNameAndNumber>
                    <h3>{formatNamePokemon(type.name)}</h3>
                    <p
                      style={{
                        color: getColor(type.name),
                      }}
                    >
                      {"#" + convertNumberIdPokemon(type.id)}
                    </p>
                  </TypeNameAndNumber>
                </TypeInfo>
                <TypeData>
                  <Descriptions layout="horizontal" column={1} bordered>
                    <Descriptions.Item label="Gen">
                      {refactorGeneration(type.generation.name)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Category">
                      {type.move_damage_class !== null
                        ? formatNamePokemon(type.move_damage_class.name)
                        : "No data"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Pokemon">
                      {type.pokemon.length}
                    </Descriptions.Item>
                  </Descriptions>
                </TypeData>
                <TypeTab>
                  <TypeTabs />
                </TypeTab>
              </TypeWrapper>
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
      </TypeBase>
    </>
  );
};
const TypeBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const TypeNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const TypeWrapper = styled.div`
  width: 500px;
`;
const TypeInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;
const TypeTab = styled.div`
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
const TypeNameAndNumber = styled.div`
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
const TypeData = styled.div`
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
export default observer(TypeDetail);
