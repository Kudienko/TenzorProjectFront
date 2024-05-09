import React from "react";
import "./SvgIcon.scss";

function SnowAlt() {
  return (
    <>
      <svg
        version="1.1"
        id="cloudSnowAlt"
        className="climacon climacon_cloudSnowAlt"
        viewBox="15 15 70 70"
      >
        <clipPath id="snowFillClip">
          <path d="M15,15v70h70V15H15z M50,65.641c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2S51.104,65.641,50,65.641z" />
        </clipPath>
        <g className="climacon_iconWrap climacon_iconWrap-cloudSnowAlt">
          <g className="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
            <g
              className="climacon_component climacon_component climacon_component-snowAlt"
              clipPath="url(#snowFillClip)"
            >
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_snowAlt"
                d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"
              />
            </g>
          </g>
          <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M61.998,65.461v-4.082c3.447-0.891,6-4.012,6-7.738c0-4.417-3.582-7.999-7.999-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.973-9.291-11.664-9.291c-6.627,0-11.999,5.373-11.999,12c0,4.438,2.417,8.305,5.999,10.379v4.444c-5.86-2.375-9.998-8.112-9.998-14.825c0-8.835,7.162-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.373,11.998,11.998C71.997,59.586,67.671,64.506,61.998,65.461z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default SnowAlt;
