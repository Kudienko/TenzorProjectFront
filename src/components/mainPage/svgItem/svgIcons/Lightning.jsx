import React from "react";
import "./SvgIcon.scss";

function Lightning() {
  return (
    <>
      <svg
        version="1.1"
        id="cloudLightning"
        className="climacon climacon_cloudLightning"
        viewBox="15 15 70 70"
      >
        <g className="climacon_iconWrap climacon_iconWrap-cloudLightning">
          <g className="climacon_wrapperComponent climacon_wrapperComponent-lightning">
            <polygon
              className="climacon_component climacon_component-stroke climacon_component-stroke_lightning"
              points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "
            />
          </g>
          <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default Lightning;
