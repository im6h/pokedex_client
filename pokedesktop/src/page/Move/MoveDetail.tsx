/**
 *
 * @author im6h
 *
 * Create at 26/9/2020.
 * Update at 26/9/2020.
 *
 */
import React, { useState, useContext, useEffect } from "react";
import colorStore, { getColor } from "../../asset/style/color";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MoveStore from "../../store/move";
import Navbar from "../../component/Navbar/Navbar";
import Chip from "../../component/Chip/Chip";
import { observer } from "mobx-react-lite";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
} from "../../util/functionHelper";
import { Spin, Descriptions } from "antd";
const MoveDetail = () => {
  let { id } = useParams();
  const moveStore = useContext(MoveStore);
  const { move } = moveStore;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    moveStore.getDetailMove(id);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <MoveBase>
        <>
          <MoveNavbar>
            <Navbar />
          </MoveNavbar>
          {!loading && (
            <>
              <MoveWrapper>
                <MoveInfo>
                  <MoveNameAndNumber>
                    <h3>{formatNamePokemon(move.name)}</h3>
                    <p
                      style={{
                        color: getColor(move.type.name),
                      }}
                    >
                      {"#" + convertNumberIdPokemon(move.id)}
                    </p>
                  </MoveNameAndNumber>
                  <MoveType>
                    <Chip name={move.type.name} />
                  </MoveType>
                </MoveInfo>
                <MoveFull>
                  <h4>{move.flavor_text_entries[0].flavor_text}</h4>
                  <Descriptions
                    title="Data move"
                    layout="horizontal"
                    column={1}
                    bordered
                  >
                    <Descriptions.Item label="Power">
                      {move.power}
                    </Descriptions.Item>
                    <Descriptions.Item label="Accuracy">
                      {move.accuracy}
                    </Descriptions.Item>
                    <Descriptions.Item label="PP">{move.pp}</Descriptions.Item>
                  </Descriptions>
                </MoveFull>
              </MoveWrapper>
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
      </MoveBase>
    </>
  );
};
const MoveBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
const MoveBall = styled.div``;
const MoveNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const MoveWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;
const MoveInfo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`;
const MoveNameAndNumber = styled.div`
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
const MoveType = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
  margin: 0px 30px;
`;
const MoveFull = styled.div`
  width: 500px;
  height: 70%;
  background-color: white;
  padding: 0px 30px;
  h4 {
    font-weight: normal;
    text-align: left;
    padding: 0px 20px;
    font-style: italic;
  }
`;
export default observer(MoveDetail);
