/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 4/10/2020.
 *
 */
import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Loading from "../../component/Loading/Loading";
import { observer } from "mobx-react-lite";
import TypeStore from "../../store/type";
import colorStore from "../../asset/style/color";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
import Base from "../../interface/base";
import { TypeBall, TypeBase, TypeList, TypeNavbar, TypeWrapper } from "./style";
import { List, Typography, PageHeader } from "antd";
const Type: React.FC<{}> = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState<boolean>(true);
  const typeStore = React.useContext(TypeStore);
  const { types } = typeStore;
  React.useEffect(() => {
    typeStore.getTypes().then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
  }, []);

  // handle click
  const handleOnClick = (id: string) => {
    history.push(`/type/${id}`);
  };

  return (
    <TypeBase>
      <TypeNavbar>
        <Navbar />
      </TypeNavbar>
      <TypeBall>
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
      </TypeBall>
      <TypeWrapper>
        <PageHeader className="site-page-header" title="Types" />
        <TypeList>
          <List
            style={{
              width: "100%",
            }}
            itemLayout="horizontal"
            dataSource={types}
            renderItem={(e: Base) => {
              let id: string = splitNumberIdPokemon(e.url);
              let _idType: number = parseInt(id);
              return (
                <List.Item
                  style={{
                    textAlign: "left",
                    margin: "0px 30px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: colorStore.type,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleOnClick(id);
                  }}
                >
                  <Typography.Text
                    style={{
                      marginRight: "40px",
                    }}
                  >
                    {`#${convertNumberIdPokemon(_idType)}`}
                  </Typography.Text>
                  {formatNamePokemon(e.name)}
                </List.Item>
              );
            }}
          />
        </TypeList>
      </TypeWrapper>
      {loading && <Loading />}
    </TypeBase>
  );
};

export default observer(Type);
