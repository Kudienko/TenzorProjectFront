import React from "react";
import "./SvgIcon.scss";

function Rain() {
  return (
    <>
      <svg
        version="1.1"
        id="cloudRain"
        class="climacon climacon_cloudRain"
        viewBox="15 15 70 70"
      >
        <clipPath id="cloudFillClip">
          <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z" />
        </clipPath>
        <g class="climacon_iconWrap climacon_iconWrap-cloudRain">
          <g class="climacon_wrapperComponent climacon_wrapperComponent-rain">
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
              d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"
            />
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
              d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"
            />
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
              d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"
            />
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
              d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"
            />
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
              d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"
            />
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
              d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"
            />
          </g>
          <g
            class="climacon_wrapperComponent climacon_wrapperComponent_cloud"
            clip-path="url(#cloudFillClip)"
          >
            <path
              class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
              d="M63.943,64.941v-4.381c2.389-1.384,4-3.961,4-6.92c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.48-4.334,1.291c-1.23-5.317-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.551,6.728,4,8.924v4.916c-4.777-2.768-8-7.922-8-13.84c0-8.835,7.163-15.997,15.998-15.997c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.941,58.863,68.602,63.293,63.943,64.941z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default Rain;
