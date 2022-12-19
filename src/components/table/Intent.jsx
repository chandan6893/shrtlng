import React, { useState } from "react";

function Intent({ ele }) {
  const [isHovering, setIsHovering] = useState(false);
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

  //handle Mouse events
  const handleMouseOver0 = (e) => {
    e.target.style.backgroundColor = intentMap[0].color.hover;
    setIsHovering(true);
  };

  const handleMouseOut0 = (e) => {
    e.target.style.backgroundColor = intentMap[0].color.bg;
    setIsHovering(false);
  };
  const handleMouseOver1 = (e) => {
    e.target.style.backgroundColor = intentMap[1].color.hover;
    setIsHovering(true);
  };

  const handleMouseOut1 = (e) => {
    e.target.style.backgroundColor = intentMap[1].color.bg;
    setIsHovering(false);
  };
  return (
    <>
      {ele === "0" ? (
        <td>
          <span
            style={{
              backgroundColor: `${intentMap[0].color.bg}`,
              color: `${intentMap[0].color.text}`,
              borderRadius: "50px",
              padding: "1.2px",
            }}
            onMouseOver={(e) => handleMouseOver0(e)}
            onMouseOut={(e) => handleMouseOut0(e)}
          >
            {intentMap[0].type.slice(0, 1)}
          </span>

          {isHovering && (
            <p className="hover_text0">{intentMap[0].hover_text} </p>
          )}
        </td>
      ) : (
        <td>
          <span
            style={{
              backgroundColor: `${intentMap[1].color.bg}`,
              color: `${intentMap[1].color.text}`,
              borderRadius: "50px",
              padding: "1.2px",
            }}
            onMouseOver={(e) => handleMouseOver1(e)}
            onMouseOut={(e) => handleMouseOut1(e)}
          >
            {intentMap[1].type.slice(0, 1)}
          </span>

          {isHovering && (
            <p className="hover_text1">{intentMap[1].hover_text} </p>
          )}
        </td>
      )}
    </>
  );
}

export default Intent;
