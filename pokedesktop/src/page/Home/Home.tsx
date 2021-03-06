/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 4/10/2020.
 *
 */
import React from "react";
import SearchBar from "../../component/Search/Search";
import Category from "../../component/Category/Category";
import New from "../../component/New/New";
import {
  HomeAction,
  HomeBase,
  HomeCategory,
  HomeIcon,
  HomeTitle,
  HomeNew,
  HomeNewTitle,
  HomeSearchBar,
} from "./style";

const Home: React.FC<{}> = () => {
  return (
    <HomeBase>
      <HomeAction>
        <HomeIcon>
          <svg
            width="100"
            height="100"
            viewBox="0 0 163 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.05"
              d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
              fill="#303943"
            />
          </svg>
        </HomeIcon>
        <HomeTitle>
          <p>What Pokemon are you looking for?</p>
        </HomeTitle>
        <HomeSearchBar>
          <SearchBar />
        </HomeSearchBar>
        <HomeCategory>
          <Category name="pokedex" />
          <Category name="move" />
          <Category name="type" />
          <Category name="generation" />
          <Category name="item" />
          <Category name="ability" />
        </HomeCategory>
      </HomeAction>
      <HomeNew className={"home__new"}>
        <HomeNewTitle className={"home__new-title"}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}>
            Pokemon News
          </p>
          <p
            style={{
              color: "#6C79DB",
              fontWeight: "normal",
              fontSize: "14px",
            }}>
            View all
          </p>
        </HomeNewTitle>
        <div>
          <New />
          <div
            style={{
              height: "1px",
              backgroundColor: "#EBEBEB",
            }}
          />
          <New />
          <div
            style={{
              height: "1px",
              backgroundColor: "#EBEBEB",
            }}
          />
          <New />
          <div
            style={{
              height: "1px",
              backgroundColor: "#EBEBEB",
            }}
          />
        </div>
      </HomeNew>
    </HomeBase>
  );
};
export default Home;
