/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PageIcon(props: PageIconProps) {
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

      <path
        d={
          "M12.75 4.75h-5a2 2 0 00-2 2v10.5a2 2 0 002 2h8.5a2 2 0 002-2v-7m-5.5-5.5v3.5a2 2 0 002 2h3.5m-5.5-5.5l5.5 5.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PageIcon;
/* prettier-ignore-end */
