import React, { useContext } from "react";
import millify from "millify";

import Intent from "./Intent";
import KeyDiff from "./KeyDiff";

import { fecthedData } from "../Context";

function Tbody({ data }) {
  const { setMapData } = useContext(fecthedData);

  //handle data in dashboard
  const handleClick = (ele) => {
    setMapData(ele);
  };
  
  return (
    <>
      <tbody>
        {data.map((ele) => {
          return (
            <tr onClick={(e) => handleClick(ele)}>
              <td>{ele[0]}</td>
              <Intent ele={ele[2]} />
              <td>{ele[1]}</td>
              <KeyDiff ele={ele[7]} />
              <td>{ele[3]}</td>
              <td>{ele[4]}</td>
              <td>
                {millify(ele[5], {
                  precision: 3,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default Tbody;
