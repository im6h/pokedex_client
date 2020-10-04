/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 4/10/2020
 *
 */
import React from "react";
import { TabStats } from "../style";
import colorStore, { getColor } from "../../../asset/style/color";
import Base from "../../../interface/base";
type StatsProps = {
  colorPokemon: string;
  arr: [
    {
      base_stat: number;
      effort: number;
      stat: Base;
    }
  ];
};
const Stats: React.FC<StatsProps> = (props) => {
  const { colorPokemon, arr } = props;
  return (
    <TabStats>
      {arr.map((e: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              textAlign: "left",
              alignItems: "center",
              margin: "1rem 0",
            }}
          >
            <div
              style={{
                width: "20%",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              <p>{e.stat.name.toUpperCase()}</p>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <p>{e.base_stat}</p>
            </div>
            <div
              style={{
                width: "60%",
                height: "6px",
                borderRadius: "4px",
                backgroundColor: colorStore.background,
              }}
            >
              <div
                style={{
                  width: `${e.base_stat * 0.33}%`,
                  height: "6px",
                  borderRadius: "4px",
                  backgroundColor: getColor(colorPokemon),
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </TabStats>
  );
};
export default Stats;
