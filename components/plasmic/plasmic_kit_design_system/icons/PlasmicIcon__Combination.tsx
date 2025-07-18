/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinationIcon(props: CombinationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        clipPath={"url(#QQyvSPSjLa)"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M15.755 9.098a5.251 5.251 0 11-4.966 9.107M4.75 14.25L10 4.75l5.25 9.5H4.75z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"QQyvSPSjLa"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CombinationIcon;
/* prettier-ignore-end */
