/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 25/9/2020.
 *
 */
import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Base from "../../interface/base";
import colorStore from "../../asset/style/color";
import { observer } from "mobx-react-lite";
import AbilityStore from "../../store/ability";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
import {
  AbilityAlert,
  AbilityBall,
  AbilityBase,
  AbilityList,
  AbilityNavbar,
  AbilityWrapper,
  Modal,
} from "./style";
import { List, Spin, Typography, PageHeader } from "antd";
function Ability() {
  const [loading, setLoading] = React.useState(true);
  const abilityStore = React.useContext(AbilityStore);
  const { abilities, error, page } = abilityStore;

  React.useEffect(() => {
    if (abilities.length === 0) {
      abilityStore.getAbilities(page, 100).then(() => {
        let timeout = setTimeout(() => {
          setLoading(false);
        }, 1500);
        return () => {
          clearTimeout(timeout);
        };
      });
    } else {
      setLoading(false);
    }
  }, [page]);

  //load more data
  const loadMore = () => {
    if (abilityStore.error !== 2) {
      setLoading(true);
      abilityStore.getAbilities(page + 100, 100);
    }
  };

  //handle scroll to loadmore data
  const handleScroll = (event: any) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      loadMore();
    }
  };

  return (
    <AbilityBase>
      <AbilityNavbar>
        <Navbar />
      </AbilityNavbar>
      <AbilityBall>
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
      </AbilityBall>
      <AbilityWrapper>
        <PageHeader className="site-page-header" title="Abilities" />
        <AbilityList onScroll={handleScroll}>
          <List
            style={{
              width: "100%",
            }}
            itemLayout="horizontal"
            dataSource={abilities}
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
                    color: colorStore.abilities,
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
        </AbilityList>
      </AbilityWrapper>
      {loading && ( //check loading done?
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
        </div>
      )}
      {error === 1 && ( //check network error
        <Modal className={"Ability__modal"}>
          <AbilityAlert className={"Ability__alert"}>
            <p>Check your network</p>
            <button
              onClick={() => {
                abilityStore.error = 0;
              }}
            >
              Close
            </button>
          </AbilityAlert>
        </Modal>
      )}
    </AbilityBase>
  );
}

export default observer(Ability);
