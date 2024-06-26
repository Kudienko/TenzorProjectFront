import React from "react";
import "./SvgIcon.scss";

function Snowy() {
  return (
    <>
      <svg
        version="1.1"
        id="sunsetAlt"
        className="climacon climacon_snowflake"
        viewBox="15 15 70 70"
      >
        <clipPath id="snowflakeFillClip">
          <path d="M15,15v70h70V15H15z M50,54c-2.209,0-4-1.791-4-4c0-2.208,1.791-3.999,4-3.999s3.999,1.791,3.999,3.999C53.999,52.209,52.209,54,50,54z" />
        </clipPath>
        <g className="climacon_iconWrap climacon_iconWrap-snowflake">
          <g
            className="climacon_componentWrap climacon_componentWrap-snowflake"
            clipPath="url(#snowflakeFillClip)"
          >
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_snowflake"
              d="M59.659,46.733l-1.958,1.13c0.188,0.682,0.298,1.396,0.298,2.137c0,0.742-0.108,1.456-0.298,2.139l1.958,1.129c0.956,0.553,1.284,1.775,0.731,2.732c-0.553,0.956-1.774,1.284-2.731,0.73l-1.954-1.127c-1.003,1.02-2.277,1.766-3.705,2.133v2.263c0,1.104-0.896,2-2,2c-1.104,0-2-0.896-2-2v-2.263c-1.428-0.367-2.703-1.113-3.705-2.133l-1.954,1.127c-0.957,0.554-2.18,0.226-2.731-0.73c-0.553-0.957-0.225-2.18,0.731-2.732l1.958-1.129c-0.189-0.683-0.298-1.396-0.298-2.139c0-0.741,0.108-1.455,0.298-2.137l-1.958-1.13c-0.956-0.553-1.284-1.775-0.731-2.732c0.552-0.956,1.774-1.284,2.731-0.731l1.954,1.128c1.002-1.02,2.277-1.766,3.705-2.134v-2.262c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.262c1.428,0.368,2.702,1.114,3.705,2.134l1.954-1.128c0.957-0.553,2.18-0.225,2.731,0.731C60.943,44.958,60.615,46.181,59.659,46.733z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default Snowy;
