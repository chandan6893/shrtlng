import React, { useContext, useEffect } from "react";
import { Card } from "antd";
import { fecthedData } from "../Context";
import millify from "millify";

import ChartMap from "./ChartMap";

function Dashboard() {
  const { mapData } = useContext(fecthedData);

  const intentMap = {
    0: {
      type: "Commercial",
      hover_text: "The user wants to investigate brands or services.",
      color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    1: {
      type: "Informational",
      hover_text: "The user wants to find an answer to a specific question.",
      color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    2: {
      type: "Navigational",
      hover_text: "The user wants to find a specific page or site.",
      color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    3: {
      type: "Transactional",
      hover_text: "The user wants to complete an action (conversion).",
      color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
  };
  const keywordDifficulty = (value) => {
    if (value > 85) {
      return {
        rating: "Very hard",
        text: "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
        color: "#D1002F",
      };
    } else if (value >= 70) {
      return {
        rating: "Hard",
        text: "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
        color: "#FF4953",
      };
    } else if (value >= 50) {
      return {
        rating: "Difficult",
        text: "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
        color: "#FF8C43",
      };
    } else if (value >= 30) {
      return {
        rating: "Possible",
        text: "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
        color: "#FDC23C",
      };
    } else if (value >= 15) {
      return {
        rating: "Easy",
        text: "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
        color: "#59DDAA",
      };
    } else {
      return {
        rating: "Very easy",
        text: "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
        color: "#009F81",
      };
    }
  };
  
  //Mounting the function
  useEffect(() => {
    keywordDifficulty();
  }, []);

  return (
    <>
      <div className="flex">
        <div className="vol_Kd">
          <Card
            title=""
            style={{
              width: 600,
              height: 100,
            }}
          >
            <h6> Volume</h6>
            <h2>{mapData[1]}🚩</h2>
          </Card>
          <Card
            title="Keyword difficulty"
            style={{
              width: 600,
              height: 245,
            }}
          >
            <h6>
              {mapData[7]}%{" "}
              <span className="chart_map">
                <ChartMap
                  bg={keywordDifficulty(mapData[7]).color}
                  value={parseInt(mapData[7])}
                />
              </span>
            </h6>
            <h6>{keywordDifficulty(mapData[7]).rating}</h6>
            <p>{keywordDifficulty(mapData[7]).text}</p>
          </Card>
        </div>
        <div>
          <div className="i_r">
            <Card
              title=""
              style={{
                width: 200,
              }}
            >
              <h6>Intent</h6>
              {mapData[2] === "0" ? (
                <h5
                  style={{
                    backgroundColor: `${intentMap[0].color.bg}`,
                    color: `${intentMap[0].color.text}`,
                    textAlign: "center",
                    borderRadius: "50px",
                  }}
                >
                  {intentMap[0].type}
                </h5>
              ) : (
                <h5
                  style={{
                    backgroundColor: `${intentMap[1].color.bg}`,
                    color: `${intentMap[1].color.text}`,
                    textAlign: "center",
                    borderRadius: "50px",
                  }}
                >
                  {intentMap[1].type}
                </h5>
              )}
            </Card>
            <Card
              title=""
              style={{
                width: 200,
              }}
            >
              <h6>Results</h6>
              <h2>
                {millify(mapData[5], {
                  precision: 3,
                })}
              </h2>
            </Card>
          </div>
          <div className="cp_cc">
            <Card
              title=""
              style={{
                width: 100,
              }}
            >
              <h6>CPC</h6>
              <h4>${mapData[3]}</h4>
            </Card>
            <Card
              title=""
              style={{
                width: 100,
              }}
            >
              <h6>Com.</h6>
              <h4>{mapData[4]}</h4>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
