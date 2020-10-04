import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { List, Descriptions, Spin, Typography } from "antd";
import Navbar from "../../component/Navbar/Navbar";
import { useParams } from "react-router-dom";
import colorStore from "../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
} from "../../util/functionHelper";
import ItemStore from "../../store/item";
const ItemDetail: React.FC<{}> = () => {
  let { id } = useParams();
  const itemStore = useContext(ItemStore);
  const { item } = itemStore;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    itemStore.getItemDetail(id).then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, []);
  return (
    <>
      <ItemBase>
        <>
          <ItemNavbar>
            <Navbar />
          </ItemNavbar>
          {!loading && (
            <>
              <ItemWrapper>
                <ItemInfo>
                  <ItemNameAndNumber>
                    <h3>{formatNamePokemon(item.name)}</h3>
                    <p
                      style={{
                        color: colorStore.typeDark,
                      }}
                    >
                      {"#" + convertNumberIdPokemon(item.id)}
                    </p>
                  </ItemNameAndNumber>
                </ItemInfo>
                <ItemFull>
                  <h4>{item.flavor_text_entries[0].text}</h4>
                  <Descriptions
                    title="Item Data"
                    layout="horizontal"
                    column={1}
                    bordered
                  >
                    <Descriptions.Item label="Cost">
                      {item.cost || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Category">
                      {formatNamePokemon(item.category.name) || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Effect">
                      {formatNamePokemon(item.effect_entries[0].short_effect) ||
                        "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Attribute">
                      <List
                        dataSource={item.attributes}
                        renderItem={(e) => (
                          <List.Item>
                            <Typography>{formatNamePokemon(e.name)}</Typography>
                          </List.Item>
                        )}
                      />
                    </Descriptions.Item>
                  </Descriptions>
                </ItemFull>
              </ItemWrapper>
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
      </ItemBase>
    </>
  );
};
const ItemBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
const ItemNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const ItemWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;
const ItemInfo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
`;
const ItemNameAndNumber = styled.div`
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
const ItemFull = styled.div`
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
export default observer(ItemDetail);
