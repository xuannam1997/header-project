/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlignLeftSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlignLeftSvgIcon(props: AlignLeftSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.75 13.25v-2.5a2 2 0 012-2h6.5a2 2 0 012 2v2.5a2 2 0 01-2 2h-6.5a2 2 0 01-2-2zm-4-8.5v14.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlignLeftSvgIcon;
/* prettier-ignore-end */
